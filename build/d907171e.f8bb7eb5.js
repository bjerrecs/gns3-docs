(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{198:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return d}));var n=a(2),o=(a(0),a(212)),i=a(214);const r={id:"download-gns3-vm",title:"Downloading the GNS3 VM",sidebar_label:"Download the GNS3 VM"},c={id:"getting-started/installation/download-gns3-vm",isDocsHomePage:!1,title:"Downloading the GNS3 VM",description:"Which Virtualization Software? VirtualBox or VMware?",source:"@site/docs/getting-started/installation/download-gns3-vm.md",permalink:"/docs/getting-started/installation/download-gns3-vm",editUrl:"https://github.com/mother/gns3-docs/blob/master/docs/getting-started/installation/download-gns3-vm.md",sidebar_label:"Download the GNS3 VM",sidebar:"someSidebar",previous:{title:"Install GNS3 on a remote server",permalink:"/docs/getting-started/installation/remote-server"},next:{title:"Download GNS3 for Windows 32 bit",permalink:"/docs/getting-started/installation/download-32-bit"}},s=[{value:"Which Virtualization Software? VirtualBox or VMware?",id:"which-virtualization-software-virtualbox-or-vmware",children:[]},{value:"Downloading the VM",id:"downloading-the-vm",children:[]}],l={rightToc:s};function d({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"which-virtualization-software-virtualbox-or-vmware"},"Which Virtualization Software? VirtualBox or VMware?"),Object(o.b)("p",null,"In this document we will explain the import of the GNS3 VM for VMware, but instructions for VirtualBox are similar (instructions for using the new Hyper-V and KVM versions of the GNS3 VM will be discussed in a separate post)."),Object(o.b)("p",null,"VMware is a better option because it\u2019s faster and supports nested virtualization (the VMs inside the VM are accelerated by your CPU). The speed difference is important and some VMs will be too slow on VirtualBox* (see note below)."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"For GNS3 1.3 please read ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"download-32-bit"}),"this documentation"),"."))),Object(o.b)("p",null,"Users running the GNS3 VM in Workstation Player should look at Note 3 at the end of the article, for a fix with WS Player 15.x versions and VIX 1.17"),Object(o.b)("h2",{id:"downloading-the-vm"},"Downloading the VM"),Object(o.b)("p",null,"You can obtain the GNS3-VM in several ways. You can download it via ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://gns3.com/software/download-vm"}),"https://gns3.com/software/download-vm"),". Select either the Virtualbox, VMware Workstation/Fusion, or VMware ESXi versions."),Object(o.b)("p",null,"These will be .zip archives, so make sure you choose \u201cSave as\u2026\u201d when downloading them, and then extract them for import into your hypervisor of choice."),Object(o.b)("p",null,"The second option is to browse to the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/GNS3/gns3-gui/releases"}),"GNS3 release page on github"),", where you can download the GNS3 application, the various versions of the GNS3 VM, and the source code from the same section:"),Object(o.b)("img",{alt:"screenshot",src:Object(i.a)("img/getting-started/installation/download-gns3-vm/1.jpg")}),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Running the VirtualBox version on VMware or the VMware version on VirtualBox will not work"))),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"VMware Workstation and VMware ESXi require different GNS3 VM files"))),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"VMware Fusion is the marketing name for VMware Workstation on Mac OSX"))),Object(o.b)("p",null,"A third option is to download it via a provided link in the GNS3 Setup Wizard:"),Object(o.b)("img",{alt:"screenshot",src:Object(i.a)("img/getting-started/installation/download-gns3-vm/2.jpg")}),Object(o.b)("p",null,"When you click that embedded link, it will automatically start downloading the GNS3-VM .zip file from the GNS3 github release page.  "),Object(o.b)("p",null,"In order to see this particular option, you\u2019ll need to choose the \u201cRun modern IOS (IOSv or IOU), ASA, and appliances from non-Cisco manufacturers\u201d  option in the Setup Wizard, as shown below, since this indicates that you will want to use the GNS3-VM (the other two indicate either local or remote server use only):"),Object(o.b)("img",{alt:"screenshot",src:Object(i.a)("img/getting-started/installation/download-gns3-vm/3.jpg")}),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The GNS3 VM has a built in upgrade mechanism so you will not need to download again for every release."))),Object(o.b)("p",null,"You can get 20% off ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://gns3.com/marketplace/software/workstation-pro-15"}),"VMware Workstation Pro")," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://gns3.com/marketplace/software/fusion-8"}),"VMware Fusion")," thanks to our deal with VMware."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Nested hardware virtualization functionality, and nested paging, were added to Virtualbox starting in version 6.0, but with a caveat: It is currently only available to users with desktops/laptops that have AMD CPUs (such as their recent Ryzen processors).   Support for this feature with Intel CPUs has been stated to be forthcoming.  "),Object(o.b)("p",{parentName:"div"},"This means that with supported CPUs, it is viable to run the GNS3 VM in Virtualbox 6.x (Virtualbox 6.0.12 was the latest tested, as of this writing). Questions about when Intel CPU h/w virt will be available for Virtualbox should be directed to the Virtualbox support forums only, not the GNS3 forums!"))),Object(o.b)("p",null,"Use of Virtualbox to run the GNS3 VM will be covered in a separate article"),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Users running the GNS3 VM in WS Player have been reporting issues with the available versions of VIX and Player 15.x.  A workaround for the problem is located in this  forum thread."))))}d.isMDXComponent=!0},212:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return h}));var n=a(0),o=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=d(a),p=n,h=b["".concat(r,".").concat(p)]||b[p]||m[p]||i;return a?o.a.createElement(h,c(c({ref:t},l),{},{components:a})):o.a.createElement(h,c({ref:t},l))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var l=2;l<i;l++)r[l]=a[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},213:function(e,t,a){"use strict";var n=a(0),o=a(52);t.a=function(){return Object(n.useContext)(o.a)}},214:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));a(76);var n=a(213),o=a(215);function i(e,t){var a=void 0===t?{}:t,i=a.forcePrependBaseUrl,r=void 0!==i&&i,c=a.absolute,s=void 0!==c&&c,l=Object(n.a)().siteConfig,d=(l=void 0===l?{}:l).baseUrl,b=void 0===d?"/":d,m=l.url;if(!e)return e;if(r)return b+e;if(!Object(o.a)(e))return e;var p=b+e.replace(/^\//,"");return s?m+p:p}},215:function(e,t,a){"use strict";function n(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}a.d(t,"a",(function(){return n}))}}]);