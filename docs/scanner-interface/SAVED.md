# Scanner Interface

::: warning
Scanner Interface is only available for KernelCare+ and KernelCare Enterprise
:::

## Issue description

Commonly used security scanners can still see CVEs even if they are patched by KernelCare. It turns out that all their decisions about CVE are based on:

* currently installed (or not) kernel packages
* uname information

## How does it work

To calm them down, we can manipulate with that information and the common part for DEB and RPM distributions relying on `uname -r` output.

Since scanners on RPM distributions relies on `rpm -q` output, we can override some functions there via `LD_PRELOAD` and force the script to output versions we need.

To deal with it, we will reload `showQueryPackage` to patch version information on the fly. It will change the information showing in rpm query results like this.

```
[centos@ip-172-31-6-166 ~]$ rpm -q kernel-headers
kernel-headers-3.10.0-693.17.1.el7.x86_64
[centos@ip-172-31-6-166 ~]$ LD_PRELOAD=/usr/libexec/kcare/kpatch_package.so rpm -q
kernel-headers-3.10.0-957.21.3.el7.x86_64
```

The reloaded functions rely on `kcarectl --uname` and replace the actual kernel version with our “effective version”.
That behavior is enabled only for one user and will not interfere with others. That user should be used to run a credentialed scan over SSH.

## Installation

All you need to do on target systems is to install/update KernelCare agent with the provided package.

```
KCARE_SCANNER_USER=username yum -y localinstall ./kernelcare-package.rpm
```
Or update an existing package:

```
KCARE_SCANNER_USER=username yum update kernelcare
```

Or install:

```
curl -s -L https://kernelcare.com/installer | KCARE_SCANNER_USER=username bash
```

Where `username` is the user which will be used to run scanners on the server.
After applying KernelCare patches (`kcarectl --update`) you will see rpm query result according to a kernel that the patches are provided.

:::tip Note
To see results, you should re-login to the server with `KCARE_SCANNER_USER` defined above.
:::

:::danger Warning
_username_ should be equal to the user name that is used by the security scanner to log in to the system. KernelCare agent should be actually installed with `KCARE_SCANNER_USER` defined for Scanner Interface to operate properly (setting the variable at the run time is not enough).
:::

## How to use

It’s rather simple. New scan results after installing a package and applying a patchset should not show any kernel CVEs that are handled by KernelCare.

For example, Nessus for an old kernel shows a bunch of detected CVEs

![](/images/scanner-manipulation-before.png)

After patches were applied, there are no kernel-related CVEs

![](/images/scanner-manipulation-after.png)

## Troubleshooting

Checking whether `LD_PRELOAD` is properly defined for the local security scanner agent (we use Qualys for this example). 

* Obtain the scanner agent PID:

```
ps -aux | grep qualys
```

* The output for the PID obtained above should contain LD_PRELOAD:

```
cat /proc/PID/environ
```

:::tip Note
Qualys scanner agent is usually run as _root_, so make sure KernelCare agent is installed with KCARE_SCANNER_USER=root
:::
