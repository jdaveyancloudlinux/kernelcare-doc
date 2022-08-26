(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{364:function(e,t,i){"use strict";i.r(t);var a=i(32),n=Object(a.a)({},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"kernelcare-whmcs-plugin"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#kernelcare-whmcs-plugin","aria-hidden":"true"}},[e._v("#")]),e._v(" KernelCare WHMCS Plugin")]),e._v(" "),i("p"),i("div",{staticClass:"table-of-contents"},[i("ul",[i("li",[i("a",{attrs:{href:"#overview"}},[e._v("Overview")])]),i("li",[i("a",{attrs:{href:"#installation-configuration"}},[e._v("Installation & Configuration")]),i("ul",[i("li",[i("a",{attrs:{href:"#installation-and-update"}},[e._v("Installation and Update")])]),i("li",[i("a",{attrs:{href:"#configuration-of-product"}},[e._v("Configuration of Product")])]),i("li",[i("a",{attrs:{href:"#configuration-of-add-on"}},[e._v("Configuration of Add-on")])])])]),i("li",[i("a",{attrs:{href:"#management"}},[e._v("Management")]),i("ul",[i("li",[i("a",{attrs:{href:"#link-via-add-on-optional-license"}},[e._v("Link Via Add-on. Optional License")])]),i("li",[i("a",{attrs:{href:"#link-products-directly"}},[e._v("Link Products Directly")])]),i("li",[i("a",{attrs:{href:"#link-via-configurable-options"}},[e._v("Link Via Configurable Options")])]),i("li",[i("a",{attrs:{href:"#link-add-ons-directly"}},[e._v("Link Add-ons Directly")])]),i("li",[i("a",{attrs:{href:"#kernelcare-key-licenses"}},[e._v("KernelCare Key Licenses")])]),i("li",[i("a",{attrs:{href:"#order"}},[e._v("Order")])]),i("li",[i("a",{attrs:{href:"#admin-area"}},[e._v("Admin Area")])]),i("li",[i("a",{attrs:{href:"#client-area"}},[e._v("Client Area")])]),i("li",[i("a",{attrs:{href:"#licenses-list"}},[e._v("Licenses List")])]),i("li",[i("a",{attrs:{href:"#add-on-licenses-list"}},[e._v("Add-on Licenses List")])])])]),i("li",[i("a",{attrs:{href:"#common-problems"}},[e._v("Common Problems")])])])]),i("p"),e._v(" "),i("h2",{attrs:{id:"overview"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),i("p",[e._v("CloudLinux Licenses For WHMCS allows you to automatically provision KernelCare, Imunify360, and CloudLinux licenses along with selected products. You can provision them for free or as a paid add-on to your product. Owing to CloudLinux Licenses add-on, all module commands on your main product are automatically reproduced on the license product.")]),e._v(" "),i("p",[i("strong",[e._v("Admin Area Functionality")])]),e._v(" "),i("ul",[i("li",[e._v("Create License")]),e._v(" "),i("li",[e._v("Terminate License")]),e._v(" "),i("li",[e._v("Suspend/Unsuspend License (only IP based licenses)")]),e._v(" "),i("li",[e._v("Change License IP Address")]),e._v(" "),i("li",[e._v("View License Details")])]),e._v(" "),i("p",[i("strong",[e._v("Client Area Functionality")])]),e._v(" "),i("ul",[i("li",[e._v("View License Details")]),e._v(" "),i("li",[e._v("Change License IP Address")])]),e._v(" "),i("p",[i("strong",[e._v("Add-on Functionality")])]),e._v(" "),i("ul",[i("li",[e._v("Manage Relations Between Add-on And License Product")]),e._v(" "),i("li",[e._v("Manage Relations Between Server And License Product")]),e._v(" "),i("li",[e._v("Automatically Add License Product To Order When Relation Is Triggered")]),e._v(" "),i("li",[e._v("View Existing Licenses")]),e._v(" "),i("li",[e._v("Dependencies Between Module Actions - Every Action: Create, Terminate, Suspend Or Unsuspend Called On The Server Product Will Result With The Same Action Performed On The Licensed Products")]),e._v(" "),i("li",[e._v("Flexible Filtering Of Existing Licenses")])]),e._v(" "),i("p",[i("strong",[e._v("Additionally")])]),e._v(" "),i("ul",[i("li",[e._v("Multi-Language Support – Only Provisioning Module")]),e._v(" "),i("li",[e._v("Supports CloudLinux, KernelCare, and Imunify360 Licenses")]),e._v(" "),i("li",[e._v("Supports WHMCS V6 and Later")])]),e._v(" "),i("h2",{attrs:{id:"installation-configuration"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#installation-configuration","aria-hidden":"true"}},[e._v("#")]),e._v(" Installation & Configuration")]),e._v(" "),i("p",[e._v("In this section we will show you how to set up our products.")]),e._v(" "),i("h3",{attrs:{id:"installation-and-update"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#installation-and-update","aria-hidden":"true"}},[e._v("#")]),e._v(" Installation and Update")]),e._v(" "),i("p",[e._v("Download CloudLinux Licenses For WHMCS:")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("Production")]),e._v(": "),i("a",{attrs:{href:"https://repo.cloudlinux.com/plugins/whmcs-cl-plugin-latest.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://repo.cloudlinux.com/plugins/whmcs-cl-plugin-latest.zip"),i("OutboundLink")],1)]),e._v(" "),i("li",[i("strong",[e._v("Beta")]),e._v(": "),i("a",{attrs:{href:"https://repo.cloudlinux.com/plugins/whmcs-cl-plugin-beta.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://repo.cloudlinux.com/plugins/whmcs-cl-plugin-beta.zip"),i("OutboundLink")],1)]),e._v(" "),i("li")]),e._v(" "),i("p",[e._v("Upload archive to your WHMCS root folder and extract it. Files should automatically jump into their places.\nRun the following script:")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("php <whmcs_root>/clDeploy.php --migrate\n")])])]),i("h3",{attrs:{id:"configuration-of-product"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#configuration-of-product","aria-hidden":"true"}},[e._v("#")]),e._v(" Configuration of Product")]),e._v(" "),i("ol",[i("li",[e._v("Log into your WHMCS admin area and go to "),i("em",[e._v("Setup → Products/Services → Products/Services")]),e._v(". Click "),i("em",[e._v("Create a New Group")]),e._v(".")]),e._v(" "),i("li",[e._v("Fill "),i("em",[e._v("Product Group Name")]),e._v(" (product group will be visible under that name in your WHMCS system) and click "),i("em",[e._v("Save Changes")]),e._v(".")]),e._v(" "),i("li",[e._v("Click "),i("em",[e._v("Create a New Product")]),e._v(". Choose "),i("em",[e._v("Other")]),e._v(" from "),i("em",[e._v("Product Type")]),e._v(" drop-down menu and previously created product group from "),i("em",[e._v("Product Group")]),e._v(" drop-down menu.")]),e._v(" "),i("li",[e._v("Fill "),i("em",[e._v("Product Name")]),e._v(" and click "),i("em",[e._v("Continue")]),e._v(".")]),e._v(" "),i("li",[e._v("Set up this product as hidden by ticking "),i("em",[e._v("Hidden")]),e._v(" checkbox at "),i("em",[e._v("Details")]),e._v(" tab. Do not set up pricing for this product. Pricing will be done in another way.")]),e._v(" "),i("li",[e._v("Go to the "),i("em",[e._v("Module Settings")]),e._v(" tab and select "),i("strong",[i("em",[e._v("CloudLinux Licenses")])]),e._v(" from "),i("em",[e._v("Module Name")]),e._v(" drop-down.")]),e._v(" "),i("li",[e._v("Fill "),i("em",[e._v("Username")]),e._v(" and "),i("em",[e._v("Password")]),e._v(" with your CloudLinux API access details and select "),i("strong",[i("em",[e._v("KernelCare")])]),e._v(" from "),i("em",[e._v("License Type")]),e._v(" drop-down.")]),e._v(" "),i("li",[e._v("Click "),i("em",[e._v("Save Changes")]),e._v(" to confirm.")])]),e._v(" "),i("div",{staticClass:"tip custom-block"},[i("p",{staticClass:"custom-block-title"},[e._v("Note")]),i("p",[e._v("You can use the CloudLinux license module as an individual product. By default, for IP license a client’s IP address defined while ordering is used. You can change license IP in service settings (as an administrator or a user). If you want to use a custom field to get the correct IP during the order, you should create a custom field with any field name where IP phrase is used.")])]),i("p",[e._v("Example:")]),e._v(" "),i("p",[i("img",{attrs:{src:"/images/WHMCSCustomField.png",alt:""}})]),e._v(" "),i("h3",{attrs:{id:"configuration-of-add-on"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#configuration-of-add-on","aria-hidden":"true"}},[e._v("#")]),e._v(" Configuration of Add-on")]),e._v(" "),i("ol",[i("li",[e._v("Go to the "),i("em",[e._v("Setup → Add-on Modules")]),e._v(", find "),i("em",[e._v("CloudLinux Licenses Add-on")]),e._v(" and click "),i("em",[e._v("Activate")]),e._v(" next to it.")]),e._v(" "),i("li",[e._v("The next step is permitting access to this module. Click "),i("em",[e._v("Configure")]),e._v(", select admin role and confirm by clicking "),i("em",[e._v("Save Changes")]),e._v(".")])]),e._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"center"}})])]),e._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"center"}},[i("img",{attrs:{src:"/images/kernelcarelicenseforwhmcs_zoom70.png",alt:""}})])]),e._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[e._v("Fig 1: KernelCare License For WHMCS provisioning module configuration.")])])])]),e._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"center"}})])]),e._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"center"}},[i("img",{attrs:{src:"/images/fig2kernelcarelicenseforwhmcsaddonmodulemainpage_zoom70.png",alt:""}})])]),e._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[e._v("Fig 2: KernelCare License For WHMCS add-on module main page.")])])])]),e._v(" "),i("h2",{attrs:{id:"management"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#management","aria-hidden":"true"}},[e._v("#")]),e._v(" Management")]),e._v(" "),i("p",[e._v("In this section you can find two ways of linking license product with your server product as well as other possibilities of the module.")]),e._v(" "),i("h3",{attrs:{id:"link-via-add-on-optional-license"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#link-via-add-on-optional-license","aria-hidden":"true"}},[e._v("#")]),e._v(" Link Via Add-on. Optional License")]),e._v(" "),i("p",[e._v("In order to allow your client to decide whether he wants to order server with or without a license we will use Product Add-on. In this way, when the client orders an add-on, the relation will be triggered and the license product will be ordered along with module.")]),e._v(" "),i("p",[e._v("The following steps must be performed to prepare such connection:")]),e._v(" "),i("ol",[i("li",[e._v("Go to "),i("em",[e._v("Setup → Products/Services → Products Add-ons")]),e._v(" and click "),i("em",[e._v("Add New Add-on")]),e._v(".")]),e._v(" "),i("li",[e._v("Fill add-on name, set up billing cycle and price.")]),e._v(" "),i("li",[e._v("Then tick "),i("em",[e._v("Show on Order")]),e._v(" checkbox, assign add-on to the product and click "),i("em",[e._v("Save Changes")]),e._v(".")])]),e._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"center"}})])]),e._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"center"}},[i("img",{attrs:{src:"/images/fig3configurationofproductaddon1_zoom70.png",alt:""}})])]),e._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[i("img",{attrs:{src:"/images/fig3configurationofproductaddon2_zoom70.png",alt:""}})])]),e._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[i("img",{attrs:{src:"/images/fig3-3_zoom50.png",alt:""}})])]),e._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[e._v("Fig 3: Configuration of product add-on, which will trigger license product adding.")])])])]),e._v(" "),i("ol",{attrs:{start:"4"}},[i("li",[e._v("Go to "),i("em",[e._v("Add-ons → CloudLinux Licenses Add-on → Add-on Relations")]),e._v(" and click "),i("em",[e._v("Add Relation")]),e._v(".")]),e._v(" "),i("li",[e._v("Select previously created product add-on and license product as shown below and click "),i("em",[e._v("Add Relation")]),e._v(".")])]),e._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"center"}})])]),e._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"center"}},[i("img",{attrs:{src:"/images/fig4creatingrelation_zoom70.png",alt:""}})])]),e._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[e._v("Fig 4: Creating relation between product add-on and provisioning module.")])])])]),e._v(" "),i("h3",{attrs:{id:"link-products-directly"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#link-products-directly","aria-hidden":"true"}},[e._v("#")]),e._v(" Link Products Directly")]),e._v(" "),i("p",[e._v("If you want to offer server along with the license, perform the following steps.")]),e._v(" "),i("div",{staticClass:"tip custom-block"},[i("p",{staticClass:"custom-block-title"},[e._v("Note")]),i("p",[e._v("Please do not set up pricing for license provisioning product. In exchange, you can increase a price for server provisioning product.")])]),i("ol",[i("li",[e._v("Prepare license provisioning product as described in the "),i("RouterLink",{attrs:{to:"/kernelcare-whmcs-plugin/#configuration-of-product"}},[e._v("Configuration of Product")]),e._v(" section of this documentation.")],1),e._v(" "),i("li",[e._v("Go to "),i("em",[e._v("Add-ons → CloudLinux Licenses Add-on → Products Relations")]),e._v(" and click "),i("em",[e._v("Add Relation")]),e._v(".")]),e._v(" "),i("li",[e._v("Select server provisioning product from the "),i("em",[e._v("Main product")]),e._v(" drop-down list and license provisioning product from "),i("em",[e._v("Linked Product With License")]),e._v(" and click "),i("em",[e._v("Add Relation")]),e._v(".")])]),e._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"center"}})])]),e._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"center"}},[i("img",{attrs:{src:"/images/fig5creatingrelationdirectly_zoom70.png",alt:""}})])]),e._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[e._v("Fig 5: Creating relations directly between server and license provisioning modules.")])])])]),e._v(" "),i("h3",{attrs:{id:"link-via-configurable-options"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#link-via-configurable-options","aria-hidden":"true"}},[e._v("#")]),e._v(" Link Via Configurable Options")]),e._v(" "),i("p",[e._v("In order to allow your client  to decide whether he wants to order server with or without license we can use Configurable Options ( "),i("a",{attrs:{href:"https://docs.whmcs.com/Addons_and_Configurable_Options",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.whmcs.com/Addons_and_Configurable_Options"),i("OutboundLink")],1),e._v(").")]),e._v(" "),i("p",[e._v("Below we will show you what steps to proceed to prepare such connection:")]),e._v(" "),i("ol",[i("li",[e._v("Configure CloudLinuxLicenses product as described "),i("RouterLink",{attrs:{to:"/kernelcare-whmcs-plugin/#configuration-of-product"}},[e._v("here")]),e._v(".")],1),e._v(" "),i("li",[e._v("Go to "),i("em",[e._v("Setup → Products/Services → Configurable Options")]),e._v(" and click "),i("em",[e._v("Create a New Group")]),e._v(".")]),e._v(" "),i("li",[e._v("Fill group name and add "),i("em",[e._v("New Configurable Option")]),e._v(" , set up billing cycle, price and option type. Then save changes.")]),e._v(" "),i("li",[e._v("Go to "),i("em",[e._v("Add-ons → CloudLinux Licenses Add-on → Configurable Options Relations")]),e._v(" and click "),i("em",[e._v("Add Relation")]),e._v(".")]),e._v(" "),i("li",[e._v("Choose appropriate configurable option and license product which it is assigned to and click "),i("em",[e._v("Add relation")]),e._v(".")])]),e._v(" "),i("div",{staticClass:"tip custom-block"},[i("p",{staticClass:"custom-block-title"},[e._v("Note")]),i("p",[e._v("The plugin doesn’t support "),i("code",[e._v("quantity")]),e._v(" type of Configurable Options.")])]),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"center"}})])]),e._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"center"}},[i("img",{attrs:{src:"/images/fig6creatingrelationdirectlybetweenserverandlicenseprovisioningmodules_zoom70.png",alt:""}})])]),e._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[e._v("Fig 6: Creating relations directly between server and license provisioning modules.")])])])]),e._v(" "),i("h3",{attrs:{id:"link-add-ons-directly"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#link-add-ons-directly","aria-hidden":"true"}},[e._v("#")]),e._v(" Link Add-ons Directly")]),e._v(" "),i("div",{staticClass:"tip custom-block"},[i("p",{staticClass:"custom-block-title"},[e._v("Note")]),i("p",[e._v("For WHMCS 7.2.x and later")])]),i("p",[e._v("WHMCS 7.2 introduces the ability to associate Product Add-ons with Provisioning Modules.")]),e._v(" "),i("p",[e._v("In order to allow your client to decide whether he wants to order server with or without license we will use product add-on. Below we will show you what steps to proceed to prepare such connection.")]),e._v(" "),i("ol",[i("li",[e._v("Go to "),i("em",[e._v("Setup → Products/Services → Products Add-ons")]),e._v(" and click "),i("em",[e._v("Add New Add-on")]),e._v(".")]),e._v(" "),i("li",[e._v("Fill add-on name, set up billing cycle and price. Then tick "),i("em",[e._v("Show on Order")]),e._v(" checkbox, assign add-on to the product.")]),e._v(" "),i("li",[e._v("Go to "),i("em",[e._v("Module Settings")]),e._v(" tab and select "),i("em",[e._v("CloudLinux Licenses")]),e._v(" from "),i("em",[e._v("Module Name")]),e._v(" drop-down.")]),e._v(" "),i("li",[e._v("Fill "),i("em",[e._v("Username")]),e._v(" and "),i("em",[e._v("Password")]),e._v(" with your CloudLinux API access (API secret key) details and select "),i("strong",[i("em",[e._v("KernelCare")])]),e._v(" from "),i("em",[e._v("License Type")]),e._v(" drop-down.")]),e._v(" "),i("li",[e._v("Click "),i("em",[e._v("Save Changes")]),e._v(" to confirm.")])]),e._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"center"}})])]),e._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"center"}},[i("img",{attrs:{src:"/images/fig6configurationofproductaddonwithprovisioningmodules_zoom70.png",alt:""}})])]),e._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[e._v("Fig 7: Configuration of product add-on with Provisioning Modules.")])])])]),e._v(" "),i("h3",{attrs:{id:"kernelcare-key-licenses"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#kernelcare-key-licenses","aria-hidden":"true"}},[e._v("#")]),e._v(" KernelCare Key Licenses")]),e._v(" "),i("ol",[i("li",[e._v("To set KernelCare Key license while adding service in Module Settings do the following:")])]),e._v(" "),i("ul",[i("li",[e._v("choose "),i("strong",[i("em",[e._v("KernelCare")])]),e._v(" in "),i("em",[e._v("License Type")]),e._v(" drop-down;")]),e._v(" "),i("li",[e._v("mark "),i("em",[e._v("Use Key")]),e._v(" (instead of IP address) checkbox;")]),e._v(" "),i("li",[e._v("enter IP registration token (API secret key) from Profile page in CLN;")]),e._v(" "),i("li",[e._v("in "),i("em",[e._v("Key Limit")]),e._v(" field enter the number of servers and click "),i("em",[e._v("Save Changes;")])])]),e._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"center"}})])]),e._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"center"}},[i("img",{attrs:{src:"/images/fig7setupkernelcarelicense_zoom70.png",alt:""}})])]),e._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[e._v("Fig 8: Setup KernelCare License.")])])])]),e._v(" "),i("ul",[i("li",[e._v("the "),i("em",[e._v("License Key Custom Field")]),e._v(" will be automatically added.")])]),e._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"center"}})])]),e._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"center"}},[i("img",{attrs:{src:"/images/fig8licensekeycustomfield_zoom70.png",alt:""}})])]),e._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[e._v("Fig 9: License Key Custom Field is displayed while editing service.")])])])]),e._v(" "),i("ol",{attrs:{start:"2"}},[i("li",[e._v("To edit service do the following:")])]),e._v(" "),i("ul",[i("li",[e._v("when "),i("em",[e._v("Service Created Successfully")]),e._v(" message appears, you can edit "),i("em",[e._v("Service")]),e._v(";")]),e._v(" "),i("li",[e._v("specify all proper information and settings and click "),i("em",[e._v("Save Changes.")])])]),e._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"center"}})])]),e._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"center"}},[i("img",{attrs:{src:"/images/fig9editingservice._zoom70.png",alt:""}})])]),e._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[e._v("Fig 10: Editing service.")])])])]),e._v(" "),i("h3",{attrs:{id:"order"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#order","aria-hidden":"true"}},[e._v("#")]),e._v(" Order")]),e._v(" "),i("p",[e._v("All the services registered in the account are displayed in "),i("em",[e._v("My Products & Services")]),e._v(" area. When you choose particular Product/Service and click "),i("em",[e._v("View Details")]),e._v(", you can view Product information, change license key, view Add-ons or make changes in "),i("em",[e._v("Management Actions")]),e._v(" section.")]),e._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"center"}})])]),e._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"center"}},[i("img",{attrs:{src:"/images/fig10clientproductslist_zoom70.png",alt:""}})])]),e._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[e._v("Fig 11: Client’s products list.")])])])]),e._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"center"}})])]),e._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"center"}},[i("img",{attrs:{src:"/images/fig11licensesdetails_zoom70.png",alt:""}})])]),e._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[e._v("Fig 12: Licenses details.")])])])]),e._v(" "),i("p",[e._v("To order and purchase a new service do the following:")]),e._v(" "),i("ul",[i("li",[e._v("choose "),i("em",[e._v("Category → KernelCare Group")]),e._v(" and click "),i("em",[e._v("Order Now")]),e._v(" on a particular service;")])]),e._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"center"}})])]),e._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"center"}},[i("img",{attrs:{src:"/images/fig12orderproductsgroup_zoom70.png",alt:""}})])]),e._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[e._v("Fig 13: Order - Products group.")])])])]),e._v(" "),i("ul",[i("li",[e._v("choose "),i("em",[e._v("Billing Cycle")]),e._v(" if possible;")]),e._v(" "),i("li",[e._v("enter information in "),i("em",[e._v("Configure Server")]),e._v(" area;")]),e._v(" "),i("li",[e._v("choose "),i("em",[e._v("Available Add-ons")]),e._v(" and click "),i("em",[e._v("Continue Shopping")]),e._v(" to proceed or "),i("em",[e._v("Checkout")]),e._v(" to view service details;")])]),e._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"center"}})])]),e._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"center"}},[i("img",{attrs:{src:"/images/hmfile_hash_2e6c26d3.png",alt:""}})])]),e._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[e._v("Fig 14: Order - Configure product.")])])])]),e._v(" "),i("ul",[i("li",[e._v("enter "),i("em",[e._v("Promotional Code")]),e._v(" in a specific field if you have one;")]),e._v(" "),i("li",[e._v("choose "),i("em",[e._v("Payment Method")]),e._v(" and click "),i("em",[e._v("Continue Shopping")]),e._v(".")])]),e._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"center"}})])]),e._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"center"}},[i("img",{attrs:{src:"/images/fig14orderreviewandcheckout_zoom70.png",alt:""}})])]),e._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[e._v("Fig 15: Order - review and checkout.")])])])]),e._v(" "),i("h3",{attrs:{id:"admin-area"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#admin-area","aria-hidden":"true"}},[e._v("#")]),e._v(" Admin Area")]),e._v(" "),i("p",[e._v("From the admin area it is possible to command such action as create, terminate, suspend/unsuspend and change IP address or License Key. Nonetheless, these actions can be ordered only on the server provisioning module and will be automatically reproduced for the license provisioning product.")]),e._v(" "),i("p",[e._v("Only change IP address feature has to be ordered manually.")]),e._v(" "),i("p",[e._v("You can also view the details of created license.")]),e._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"center"}})])]),e._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"center"}},[i("img",{attrs:{src:"/images/fig15kernelcarelicenses_zoom70.png",alt:""}})])]),e._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[e._v("Fig 16: KernelCare Licenses For WHMCS admin area.")])])])]),e._v(" "),i("h3",{attrs:{id:"client-area"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#client-area","aria-hidden":"true"}},[e._v("#")]),e._v(" Client Area")]),e._v(" "),i("p",[e._v("The clients are also able to view their servers license details. And as well as you, they are able to change IP address or License Key of their licenses.")]),e._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"center"}})])]),e._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"center"}},[i("img",{attrs:{src:"/images/fig16kernelcarelicenses_zoom70.png",alt:""}})])]),e._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[e._v("Fig 17: KernelCare Licenses For WHMCS client area.")])])])]),e._v(" "),i("p",[e._v("To change IP address or License Key click "),i("em",[e._v("Change")]),e._v(" as shown on the screen above. Then specify IP address or License Key and click "),i("em",[e._v("Save")]),e._v(".")]),e._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"center"}})])]),e._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"center"}},[i("img",{attrs:{src:"/images/fig17changinglicensekeyoripaddress_zoom70.png",alt:""}})])]),e._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[e._v("Fig 18: Changing License Key or IP address.")])])])]),e._v(" "),i("h3",{attrs:{id:"licenses-list"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#licenses-list","aria-hidden":"true"}},[e._v("#")]),e._v(" Licenses List")]),e._v(" "),i("p",[e._v("You can view the list of all licenses owned by your client at our add-on → "),i("em",[e._v("Licenses List")]),e._v(".")]),e._v(" "),i("p",[e._v("You can filter the list of licenses by client name, server provisioning products, license provisioning products and license IP address/Key.")]),e._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"center"}})])]),e._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"center"}},[i("img",{attrs:{src:"/images/fig18-newlicenseslist_zoom70.png",alt:""}})])]),e._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[e._v("Fig 19: Licenses List.")])])])]),e._v(" "),i("h3",{attrs:{id:"add-on-licenses-list"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#add-on-licenses-list","aria-hidden":"true"}},[e._v("#")]),e._v(" Add-on Licenses List")]),e._v(" "),i("div",{staticClass:"tip custom-block"},[i("p",{staticClass:"custom-block-title"},[e._v("Note")]),i("p",[e._v("For WHMCS 7.2.x and later")])]),i("p",[e._v("You can view a list of all product add-on with "),i("em",[e._v("Provisioning Modules")]),e._v(" licenses owned by your client at our add-on → "),i("em",[e._v("Licenses List")]),e._v(".")]),e._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"center"}})])]),e._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"center"}},[i("img",{attrs:{src:"/images/fig19newaddonlicenseslist_zoom70.png",alt:""}})])]),e._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[e._v("Fig 20: Add-on Licenses List.")])])])]),e._v(" "),i("h2",{attrs:{id:"common-problems"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#common-problems","aria-hidden":"true"}},[e._v("#")]),e._v(" Common Problems")]),e._v(" "),i("p",[e._v("After activating the server provisioning product, license provisioning product bounded to it is still pending.")]),e._v(" "),i("p",[i("strong",[e._v("Reason")]),e._v(": License IP address may be already taken.")]),e._v(" "),i("p",[i("strong",[e._v("Solution")]),e._v(": Change server IP address.")]),e._v(" "),i("div",{staticClass:"tip custom-block"},[i("p",{staticClass:"custom-block-title"},[e._v("Note")]),i("p",[e._v("Currently, only key-based licenses are available for Imunify360. Support of IP-based licenses will be added soon.")])])])},[],!1,null,null,null);t.default=n.exports}}]);