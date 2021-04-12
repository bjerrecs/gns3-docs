(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{174:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return h}));var o=n(2),i=(n(0),n(212)),a=n(214);const s={id:"importing-vmx-and-vqfx-into-gns3",title:"Importing vMX and vQFX into GNS3",sidebar_label:"Importing vMX and vQFX into GNS3"},r={id:"how-to-guides/importing-vmx-and-vqfx-into-gns3",isDocsHomePage:!1,title:"Importing vMX and vQFX into GNS3",description:"Important edit - see bottom of the document!",source:"@site/docs/how-to-guides/importing-vmx-and-vqfx-into-gns3.md",permalink:"/docs/how-to-guides/importing-vmx-and-vqfx-into-gns3",editUrl:"https://github.com/mother/gns3-docs/blob/master/docs/how-to-guides/importing-vmx-and-vqfx-into-gns3.md",sidebar_label:"Importing vMX and vQFX into GNS3",sidebar:"someSidebar",previous:{title:"Cisco ASA",permalink:"/docs/how-to-guides/cisco-asa"},next:{title:"How to use applications with the GNS3 Web interface",permalink:"/docs/how-to-guides/how-to-use-console-applications-with-the-web-ui"}},l=[{value:"Legacy VMX (the single-VM pre-release versions)",id:"legacy-vmx-the-single-vm-pre-release-versions",children:[]},{value:"Importing the split-VM public releases/trials of VMX",id:"importing-the-split-vm-public-releasestrials-of-vmx",children:[]},{value:"Importing the pre-releases VQFX trial into GNS3",id:"importing-the-pre-releases-vqfx-trial-into-gns3",children:[]},{value:"How to ask Juniper for access to download the 60-day trial of VMX, and the pre-releases trial of VQFX",id:"how-to-ask-juniper-for-access-to-download-the-60-day-trial-of-vmx-and-the-pre-releases-trial-of-vqfx",children:[]}],c={rightToc:l};function h({components:e,...t}){return Object(i.b)("wrapper",Object(o.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Important edit - see bottom of the document!"))),Object(i.b)("h2",{id:"legacy-vmx-the-single-vm-pre-release-versions"},"Legacy VMX (the single-VM pre-release versions)"),Object(i.b)("p",null,"These single-VM versions of vMX include 14.1R1.10, 14.1R3.5, and 14.1R4.8."),Object(i.b)("p",null,"First, click ",Object(i.b)("strong",{parentName:"p"},"Edit->Qemu VMs->New")," in GNS3."),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/how-to-guides/importing-vmx-and-vqfx-into-gns3/1.jpg")}),Object(i.b)("p",null,"I just called it \u201cvMX\u201d, but you could include the version number in the name, as well."),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/how-to-guides/importing-vmx-and-vqfx-into-gns3/2.jpg")}),Object(i.b)("p",null,"Next, assign it 1GB of RAM, and select your qemu binary. I happen to be using v2.6.0 in Linux, but the GNS3-VM will have v2.5.0."),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/how-to-guides/importing-vmx-and-vqfx-into-gns3/3.jpg")}),Object(i.b)("p",null,"Next, choose your image file. By default, these will be called ",Object(i.b)("inlineCode",{parentName:"p"},"\u201cjinstall-vmx-<version>-domesting.img\u201d"),"."),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/how-to-guides/importing-vmx-and-vqfx-into-gns3/4.jpg")}),Object(i.b)("p",null,"When you edit the newly created VM, set assign it to the Routers category, and make sure it\u2019s set to use 1GB RAM, 1 \u201cvCPU\u201d, and telnet."),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/how-to-guides/importing-vmx-and-vqfx-into-gns3/5.jpg")}),Object(i.b)("p",null,"For the network settings, I\u2019ve assigned it 12 adapters. Here\u2019s why:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Eth0 = the management interface (fxp0)"),Object(i.b)("li",{parentName:"ul"},"Eth1 = internal interface (unusable to us)"),Object(i.b)("li",{parentName:"ul"},"Eth2 = ge-0/0/0"),Object(i.b)("li",{parentName:"ul"},"Eth3 = ge-0/0/1"),Object(i.b)("li",{parentName:"ul"},"Eth4 = ge-0/0/2"),Object(i.b)("li",{parentName:"ul"},"\u2026"),Object(i.b)("li",{parentName:"ul"},"Eth11 = ge-0/0/9")),Object(i.b)("p",null,"Thus, if you wanted to connect ge-0/0/0 on two vMX instances to each other, you\u2019d connect Eth2 on both VMs to each other."),Object(i.b)("p",null,"Here are what your final settings should look like, in GNS3:"),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/how-to-guides/importing-vmx-and-vqfx-into-gns3/6.jpg")}),Object(i.b)("p",null,"When you start up one of these legacy images, the login is \u201croot\u201d with no password.  Now, before I proceed, there something you need to be aware of:  Not all the pre-release single-VM images of vMX had the virtual FP enabled.  Here is what you WANT to see, after the vMX instance loads:"),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/how-to-guides/importing-vmx-and-vqfx-into-gns3/7.jpg")}),Object(i.b)("p",null,"If that statement isn\u2019t there, don\u2019t worry. You can manually enable it by running this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"root@%  echo \u2018vm_local_rpio=\u201d1\u201d\u2019 >> /boot/loader.conf\n")),Object(i.b)("p",null,"Reboot the image, and then it will be enabled."),Object(i.b)("p",null,"Something else you know:  Even though the legacy vMX image boots up rather quickly, the virtual FP part of it does NOT. You really need to give it an extra 2-3 minutes, after you see the login prompt, so that everything fully loads up. Here is what you\u2019ll see, if you do not wait:"),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/how-to-guides/importing-vmx-and-vqfx-into-gns3/8.jpg")}),Object(i.b)("p",null,"You may think that looks fine, but the virtual PIC 0 is missing, which means none of the gigabit ethernet interfaces will ever be present.  Once you wait an extra 2-3 minutes, here\u2019s the output we really want to see:"),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/how-to-guides/importing-vmx-and-vqfx-into-gns3/9.jpg")}),Object(i.b)("p",null,"Notice that virtual PIC 0 is Online, and we can see that the 10 ge-0/0/x interfaces I configured the VM to use, are present and \u201cup/up\u201d. That means we can start configuring the system.  Type \u201cedit\u201d (without the quotes) to get into configuration mode.  Now, since we didn\u2019t have a root password when we logged in, the first step we should do is create one. If we don\u2019t, then the commit process will never work, so we\u2019ll be unable to commit our configuration changes."),Object(i.b)("p",null,"In the below example, I set a root system password, configured ge-0/0/0 to use an IPv4 address, and successfully committed the changes:"),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/how-to-guides/importing-vmx-and-vqfx-into-gns3/10.jpg")}),Object(i.b)("p",null,"That\u2019s really all it takes to get the legacy single-VM versions of vMX to run via GNS3.  Since they are far more lightweight (resource-wise) than the split VM public releases of vMX, you might want to consider tracking these down. Sure, they are missing features, but they\u2019re perfect if you want to dip your toes in Juniper\u2019s \u201cwater\u201d, and you can easily use multiple instances in a topology, like this:"),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/how-to-guides/importing-vmx-and-vqfx-into-gns3/11.jpg")}),Object(i.b)("h2",{id:"importing-the-split-vm-public-releasestrials-of-vmx"},"Importing the split-VM public releases/trials of VMX"),Object(i.b)("p",null,"With the public releases of vMX, Juniper split it up into two VMs: the virtual control-plane (vCP), and the virtual forwarding-plane (vFP). This means we\u2019ll need to create two VMs in GNS3, and connect them together, in order to run a vMX \u201cinstance\u201d.   The way to do this, is to request access to the 60-day trial download from Juniper, and download the KVM version.  The reason we\u2019re after the KVM version, is that we\u2019ll need 4 files out of the \u201cimages\u201d folder, in order to create and run the VMs. I\u2019ve successfully been able to do this with the 16.1R2.11 and 16.1R3.10 versions.    "),Object(i.b)("p",null,"When you download the KVM version of vMX, it will come as a roughly 3GB .tgz file. Once you extract that archive, here\u2019s what you\u2019ll find in the resulting folder:"),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/how-to-guides/importing-vmx-and-vqfx-into-gns3/12.jpg")}),Object(i.b)("p",null,"All of these are necessary, if you wanted to run vMX on an Ubuntu server via KVM, but since we\u2019ll be using this with GNS3, we only need 4 files from the images folder:"),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/how-to-guides/importing-vmx-and-vqfx-into-gns3/13.jpg")}),Object(i.b)("p",null,"If you have no intention of running vMX on an Ubuntu server, feel free to delete everything except the files I\u2019ve highlighted. Just be aware that Juniper changes the filenames of the vFPC .img and the vmx .qcow2 file, with the different versions. They may even require we use a different metadata-usb-re.img in later releases."),Object(i.b)("p",null,"First, let\u2019s create the vCP virtual machine, so we can run it via Qemu:"),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/how-to-guides/importing-vmx-and-vqfx-into-gns3/14.jpg")}),Object(i.b)("p",null,"I chose to name the VMs \u201cvMX-vCP\u201d and vMX-vFP\u201d, but you can call them whatever you wish."),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/how-to-guides/importing-vmx-and-vqfx-into-gns3/15.jpg")}),Object(i.b)("p",null,"We need to allocate vCP at least 2GB RAM."),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/how-to-guides/importing-vmx-and-vqfx-into-gns3/16.jpg")}),Object(i.b)("p",null,"Choose the junos .qcow2 file from the image folder to be used as HDA.  Click finish, and we\u2019ll edit the vMX-vCP vm:"),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/how-to-guides/importing-vmx-and-vqfx-into-gns3/17.jpg")}),Object(i.b)("p",null,"Assign vMX-vCP to the Router category, confirm it\u2019s been assigned 2GB RAM, 1 vCPU, and that we\u2019ll use Telnet. Next, we need to click on the HDD tab, since we must add two more files:"),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/how-to-guides/importing-vmx-and-vqfx-into-gns3/18.jpg")}),Object(i.b)("p",null,"We MUST add vmxhdd.img as HDB, and metadata-usb-re.img as HDC.  Failing to add these, or adding them in the wrong order, will result in this VM either not loading at all, or to load up with issues.  Click on the Network Tab next."),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/how-to-guides/importing-vmx-and-vqfx-into-gns3/19.jpg")}),Object(i.b)("p",null,"The vMX-vCP VM only needs two adapters. One to connect to an out-of-band mgmt switch, and the other to connect to the vMX-vFP VM as our internal interface.  I\u2019ve see people name the first port \u201cfxp0\u201d, since that\u2019s what the mgmt port is called, and then use em{port1} so that the second interface is called \u201cem1\u201d, which is the name of the internal interface.  You can leave these set as Intel GigE interfaces.  Click finish, and here are what your final settings for the vCP VM should look like:"),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/how-to-guides/importing-vmx-and-vqfx-into-gns3/20.jpg")}),Object(i.b)("p",null,"Next, we need to create the vFP VM:"),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/how-to-guides/importing-vmx-and-vqfx-into-gns3/21.jpg")}),Object(i.b)("p",null,"Again, I just called this the unimaginative name \u201cvMX-vFP\u201d, but you can call it whatever you want."),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/how-to-guides/importing-vmx-and-vqfx-into-gns3/22.jpg")}),Object(i.b)("p",null,"Yes, you actually do need to assign the vFP virtual machine 4GB RAM. You could even go as far as assigning it 6GB RAM."),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/how-to-guides/importing-vmx-and-vqfx-into-gns3/23.jpg")}),Object(i.b)("p",null,"We assign the ",Object(i.b)("inlineCode",{parentName:"p"},"vFPC-<date>.img")," file to be HDA  (we don\u2019t currently need to worry about adding extra disk images for the vFP vm at this time). Go back, and edit the newly created \u201cvMX-vFP\u201d vm, and we\u2019ll make some setting changes:"),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/how-to-guides/importing-vmx-and-vqfx-into-gns3/24.jpg")}),Object(i.b)("p",null,"Set this vm to be part of the Router group, confirm that it\u2019s been assigned 4GB RAM, assign it THREE (3) vCPUs, and that we\u2019ll be using telnet. Next, click on the Network tab:"),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/how-to-guides/importing-vmx-and-vqfx-into-gns3/25.jpg")}),Object(i.b)("p",null,"I have seen folks say not to use more than 9 interfaces, but with the 16.x series, I\u2019ve had pretty good luck with 12.   The first port name was set to \u201cext\u201d, since that will also connect to the OOB mgmt switch, and the name format was set to Eth{port1}, since Eth1 will be part of our internal interface, and connect to \u201cem1\u201d of the vCP vm.   Now, notice that I set the interface type to \u201cvirtio-net-pci\u201d. This is very important. When I tried leaving it set to Intel e1000, it would generate lots of error on boot (and besides, you use those adapter types, when running vMX via KVM on an Ubuntu server any way, so it makes sense).  "),Object(i.b)("p",null,"Now, this next part is optional, but you can limit the amount of CPU time that gets allocated to the vFP vm via the Advanced Settings tab:"),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/how-to-guides/importing-vmx-and-vqfx-into-gns3/26.jpg")}),Object(i.b)("p",null,"I haven\u2019t tried this part yet, but I have seen people recommend using this option for both the vFP vm of vMX, as well as the vPFE vm of vQFX, so they don\u2019t peg out the vCPUs they\u2019ve been assigned."),Object(i.b)("p",null,"Here are what the final settings of your vMX-vFP vm should look like:"),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/how-to-guides/importing-vmx-and-vqfx-into-gns3/29.jpg")}),Object(i.b)("p",null,"Here\u2019s an example topology, to show you how to connect the two VMs together, as well as connect other VMs to our vMX \u201cdevice\u201d:"),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/how-to-guides/importing-vmx-and-vqfx-into-gns3/30.jpg")}),Object(i.b)("p",null,"I used a generic ethernet switch to stand in for an actual OOB mgmt switch.  Notice that \u201cfxp0\u201d of the vCP vm and \u201cext\u201d of the vFP vm connect to it.  Also note that \u201cem1\u201d of vCP and Eth1 of vFP connect to each other, replicating the internal interface found in physical MX devices."),Object(i.b)("p",null,"Just like with our legacy single-VM versions of vMX, Eth2 is our ge-0/0/0 interface, Eth3 is ge-0/0/1, and so on\u2026 All of our other topology devices will connect to the vFP vm, not the vCP vm."),Object(i.b)("p",null,"Now, let\u2019s boot the vCP and vFP VMs up!  I won\u2019t sugar coat this, they take a while to load up. The vFP vm loads up first, but only to a point. It will sit and wait on the vCP vm to fully load up, before it can fully load up itself.  Here\u2019s a visual hint that the vFP is fully loaded:"),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/how-to-guides/importing-vmx-and-vqfx-into-gns3/31.jpg")}),Object(i.b)("p",null,"Once you see those messages, the vFP vm is loaded up. You can even log into it, by using \u201croot/root\u201d, but you\u2019ll be dropped into Wind River Linux, and not Junos"),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/how-to-guides/importing-vmx-and-vqfx-into-gns3/32.jpg")}),Object(i.b)("p",null,"Personally, I wouldn\u2019t really recommend tinkering around in Linux directly. Instead, I\u2019d open up the PFE shell via the vCP, using this command:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"> start shell pfe network fpc0\n")),Object(i.b)("p",null,"By using this, you can troubleshoot the PFE (in vMX, they actually only virtualized the Lookup (LU) part of the Trio chipset. The other functional blocks were recreated by Juniper, using the software packet processing abilities of Linux, and the DPDK libraries/Framework from Intel (for certain features)"),Object(i.b)("p",null,"There\u2019s a free Day One book (you just need a free J-net account) called \u201cThis Week: An Expert Packet Walkthrough on the MX 3D Series\u201d that will show you more PFE shell commands. ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.www.juniper.net/us/en/training/jnbooks/day-one/networking-technologies-series/packet-walkthrough-mx-series/"}),"Here\u2019s a direct link to the .pdf file"),"."),Object(i.b)("p",null,"If you want to read more about this (and MX in general), you can check out the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.amazon.com/Juniper-MX-Comprehensive-Guide-Technologies/dp/1491932724"}),"MX series 2nd Edition book from O\u2019Reilly")," (you can also read it on Safari Online if you have an account there)."),Object(i.b)("p",null,"Now, when you log into the vCP vm, it\u2019s \u201croot\u201d with no password, and you\u2019ll be dropped into Junos, just like before:"),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/how-to-guides/importing-vmx-and-vqfx-into-gns3/33.jpg")}),Object(i.b)("p",null,"You can see our virtual PIC 0 is Online, and our 10 ge-0/0/x interfaces are \u201cup/up\u201d, but notice that like with vSRX, the virtual PIC 0 doesn\u2019t show how many interfaces that PIC would provide. Weird."),Object(i.b)("p",null,"Any way, once you\u2019ve reached this point, you can administer it, just like a single-VM version of vMX. ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.juniper.net/us/en/dm/free-vmx-trial/"}),"On this page"),", there is a link to an evaluation license you can add to vMX (there\u2019s also a link that shows how to do it). It gives you 60 days to try out a premium license with 50Mbps throughput. You can also use it without the license, but you\u2019re limited to the base license and 1Mbps."),Object(i.b)("p",null,"Something I was unable to get working with vMX and GNS3, was having two routing engines running at the same time. It\u2019s entirely possible it\u2019ll work if you build the KVM version of vMX on a dedicated server, but trying to use the metadata-usb-re0 and re1 images as hdc and hdd, respectively still only resulted in vMX using a single routing engine. That means no Virtual Chassis, NSR, or ISSU for us, in a GNS3 topology.  "),Object(i.b)("h2",{id:"importing-the-pre-releases-vqfx-trial-into-gns3"},"Importing the pre-releases VQFX trial into GNS3"),Object(i.b)("p",null,"This is fairly simple to import into GNS3, even though it is a split VM, just like vMX. There are only currently two versions available:  VMware and Vagrant.  When I requested access to the trial downloads, here are the files Juniper has available:"),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/how-to-guides/importing-vmx-and-vqfx-into-gns3/34.jpg")}),Object(i.b)("p",null,"We only need two files, I just wanted to show that they have two .vmdk files for VMware (we can use them with Qemu/KVM), as well as the same two files, but as Vagrant .box files for Virtualbox."),Object(i.b)("p",null,"As you can glean from the filenames, these are virtual versions of Juniper QFX 10000 series switches  (vQFX thinks it has a single QFX10002-36Q linecard installed).  These are high-end switches aimed more at Spine, Core, IP Exchange, Provider Edge, or any other role that calls for high-end switches.  Like vMX and physical MX routers, Junos actually runs as a guest OS via KVM, while the host OS is Wind River\u2019s Yocto Linux."),Object(i.b)("p",null,"Let\u2019s get started by creating the Routing Engine VM for Qemu:"),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/how-to-guides/importing-vmx-and-vqfx-into-gns3/35.jpg")}),Object(i.b)("p",null,"Again, I used a pretty unimaginative name for it."),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/how-to-guides/importing-vmx-and-vqfx-into-gns3/36.jpg")}),Object(i.b)("p",null,"I allocated it 1GB RAM, but I\u2019ve heard from a user that he only gave it 512MB RAM, when he runs it in the GNS3-VM. I can confirm that it boots with that amount, but I haven\u2019t really stressed the VMs yet, so I don\u2019t know if it\u2019s going to cause an issue down the road."),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/how-to-guides/importing-vmx-and-vqfx-into-gns3/37.jpg")}),Object(i.b)("p",null,"Next, select the vqfx10k-re-15.1X53-D60  file. I converted the .vmdk files into .qcow2 disk images, but you can run the .vmdk files directly, without needing this extra step."),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/how-to-guides/importing-vmx-and-vqfx-into-gns3/38.jpg")}),Object(i.b)("p",null,"When you edit this newly created VM, add it to the Switches category, and assign it 2 vCPUs. Leave console type as telnet. Click the Network tab next."),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/how-to-guides/importing-vmx-and-vqfx-into-gns3/39.jpg")}),Object(i.b)("p",null,"Unlike with vMX, we\u2019ll actually connect our other topology devices to the Routing Engine (RE)  VM, instead of the Packet Forwarding Engine (PFE) VM, which is why I assigned it 15 interfaces."),Object(i.b)("p",null,"Just like with vMX, Eth0 will connect to an OOB mgmt switch, Eth1 will connect to Eth1 of the PFE VM as an internal interface, and for some reason, we can\u2019t use Eth2 (not sure of why).  That means our interface scheme now looks like this:"),Object(i.b)("p",null,"Eth3 = xe-0/0/0\nEth4 = xe-0/0/1\nEth5 = xe-0/0/2\n\u2026\nEth14 = xe-0/0/11"),Object(i.b)("p",null,"Once finished, your final VM settings should resemble this:"),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/how-to-guides/importing-vmx-and-vqfx-into-gns3/40.jpg")}),Object(i.b)("p",null,"Now we create the vPFE VM:"),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/how-to-guides/importing-vmx-and-vqfx-into-gns3/41.jpg")}),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/how-to-guides/importing-vmx-and-vqfx-into-gns3/42.jpg")}),Object(i.b)("p",null,"I only assigned the PFE VM 1GB RAM, as well."),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/how-to-guides/importing-vmx-and-vqfx-into-gns3/43.jpg")}),Object(i.b)("p",null,"Select the vqfx10k-pfe-20160609-2 file. Again, I had converted the .vmdk file to a .qcow2, but you could likely skip that step, and still run this fine."),Object(i.b)("p",null,"Now to edit the newly create vQFX-PFE vm:"),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/how-to-guides/importing-vmx-and-vqfx-into-gns3/44.jpg")}),Object(i.b)("p",null,"Assign it to the Switches category, double-check it has 1GB RAM and 1 vCPU, and that the console type is telnet. Next, click the Network tab:"),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/how-to-guides/importing-vmx-and-vqfx-into-gns3/45.jpg")}),Object(i.b)("p",null,"We only need two interfaces, and we don\u2019t need to alter any other settings.  Now, one complaint about vQFX has been that once the PFE vm fully loads, it will peg the vCPU assigned it to 100%. If you click on the Advanced Settings tab, you can limit the percentage of CPU time this VM can use, but it WILL cause it to load even slower than it already does."),Object(i.b)("p",null,"Now, let\u2019s fire up our vQFX \u201cdevice\u201d.  Here\u2019s a sample topology, just to show how to connect the VMs together:"),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/how-to-guides/importing-vmx-and-vqfx-into-gns3/46.jpg")}),Object(i.b)("p",null,"Just like vMX, the Eth0 interfaces connect to the OOB mgmt switch, and Eth1 on each VM connect to each other, to be our \u201cinternal interface\u201d.  Now, unlike vMX, not only do other topology devices connect to the RE vm, instead of the PFE vm ( RE is like vCP, and PFE is like vFP), so that\u2019s backwards, but also note that we have to use Eth3 as the first switchport of our vQFX \u201cdevice\u201d, instead of Eth2, like we would with vMX.  "),Object(i.b)("p",null,"Now, let\u2019s start both vQFX VMs up. I\u2019m going to warn you, that even with the settings I assigned it, vQFX will take about 15-20 minutes to fully load, largely due to the PFE VM.   One other thing that\u2019s a bit odd, is that the console window for the PFE vm will just sit at \u201cLoading Linux ..\u201d"),Object(i.b)("p",null," I thought it was an issue at first, but it turns out that it\u2019s not. You can safely ignore it. .  In fact, you don\u2019t really even need to open a terminal window for the PFE VM, because it displays nothing but that message, and we can always open a shell for the PFE via the RE vm, just like we can do with vMX.  "),Object(i.b)("p",null,"The RE vm will drop us to the Junos prompt, like we\u2019re used to. The only way to really tell that the PFE is fully loaded, is to login with \u201croot/Juniper\u201d, type \u201ccli\u201d (minus the quotes), and then run these commands:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"root> show chassis fpc pic-status\nroot > show interfaces xe-* terse.\n")),Object(i.b)("p",null,"Here\u2019s what it looks like, when we\u2019re ready to go:"),Object(i.b)("img",{alt:"screenshot",src:Object(a.a)("img/how-to-guides/importing-vmx-and-vqfx-into-gns3/47.jpg")}),Object(i.b)("p",null,"Notice that it thinks we\u2019re using the QFX10002-36Q linecard, and PIC 0 claims it supports up to 48  10G ports. I\u2019ve never tried that many, just xe-0/0/0 - xe-0/0/11, which I know work.  "),Object(i.b)("p",null,"Now, since we had to use a password to login, you can skip the step of creating a system password. We can commit configuration changes right away.  One thing I do want you to be aware of, is that all the switchports are set to \u201cdhcp\u201d by default.  You can turn this off, by running"),Object(i.b)("p",null,"Deactivate interfaces xe-0/0/0 unit 0 family inet dhcp"),Object(i.b)("p",null,"(note: you\u2019d have to do this on all switchports you want to assign an ip address to, directly)."),Object(i.b)("p",null,"If you want to learn more about the QFX-10K series in general, you can either purchase the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.amazon.com/Juniper-QFX10000-Comprehensive-Building-Next-Generation/dp/1491922257"}),"O\u2019Reilly QFX10000 series book"),", or read it on Safari Online (if you have an account).  There\u2019s nothing on vQFX (especially since it\u2019s still not production-ready), but it likely will in a 2nd edition, like the MX series book."),Object(i.b)("h2",{id:"how-to-ask-juniper-for-access-to-download-the-60-day-trial-of-vmx-and-the-pre-releases-trial-of-vqfx"},"How to ask Juniper for access to download the 60-day trial of VMX, and the pre-releases trial of VQFX"),Object(i.b)("p",null,"For the vQFX trial, ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.juniper.net/us/en/dm/free-vqfx-trial/"}),"click on this link"),". Next, click on the Customer Care link, and for \u201cissue type\u201d, select \u201cAccess to software downloads\u201d.  In the Description box below that, type out \u201cQFX10000 trial\u201d, and fill out the remaining fields. A Juniper customer care rep should contact you via email in a few days. They seem to prefer it, if you use a company email address, but you can sometimes explain it away, if you are a freelance network contractor.  "),Object(i.b)("p",null,"For the vMX 60-day trial, ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.juniper.net/us/en/dm/free-vmx-trial/"}),"click on this link"),". You click on the same Customer Care link, and fill out the form just like before, but you put \u201cvMX 60-day trial\u201d in the Description box.  Fill out the rest of the information as before, and you should get an email from Juniper customer care in a few days."),Object(i.b)("p",null,"There\u2019s also a link on that first vMX page, with a freebie 60-day eval license. You can add it by running this command:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{})," > request system add license terminal\n")),Object(i.b)("p",null,"Then, just copy and paste that freebie license key into the cli, and use Ctrl+D to exit. That\u2019ll enable the license, and start the 60-day countdown.  You can view license info with this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"> show system license.\n")),Object(i.b)("p",null,"There\u2019s currently no trial license for vQFX, since it\u2019s still pre-release, just like we didn\u2019t need one for the old single-vm vMX."),Object(i.b)("p",null,"I have no idea if these trial downloads are only available to U.S. residents, or not."),Object(i.b)("p",null,"[EDIT]"),Object(i.b)("p",null,"With the release of vMX 17.2R1.13, and the latest vqfx10k routing engine VM, there are a few things you need to be aware of:"),Object(i.b)("p",null,"vMX 17.2R1.13 -   Firstly, the chassis will attempt to auto-update the system image, and it relentlessly spams the console. You can disable this by using:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"root# delete chassis auto-image-upgrade\n")),Object(i.b)("p",null,"Secondly, every interface has DHCP enabled by default. You can correct this by running          this by deleting dhcp from an interface.  For example, to remove it from ge-0/0/0, you\u2019d use this:  "),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"delete interfaces ge-0/0/0.0 family inet dhcp\n")),Object(i.b)("p",null,"Without doing the above, you won\u2019t be able to assign an IP address to an interface.            "),Object(i.b)("p",null,"Just be aware that you\u2019ll need to assign the system a root-authentication password (as usual), in order to use \u201ccommit\u201d, so that these changes apply. The commit process will fail without a system password set."),Object(i.b)("p",null,"To set a system password, run this command:"),Object(i.b)("p",null,"[edit]"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"root# set system root-authentication plain-text-password\nNew password:\nRetype new password:\n")),Object(i.b)("p",null,"There are also two other versions of 17.2R1.13 available. The \u201climited\u201d version is pointless, since you cannot apply the trial license to it, so you\u2019ll be limited to the same three features that you have after the 90-day trial license expires. There\u2019s also a file named \u201cnested\u201d, but from my testing, it seems to only be a VM of the virtual control-plane. It only loads up WindRiver linux, so I\u2019d ignore it, too.  "),Object(i.b)("p",null,"Just stick with the KVM or ESXi releases of 17.2R1.13 (and apply the trial license), and you\u2019ll be fine."),Object(i.b)("p",null,"2)  vqfx10k-re-15_X53-D63:"),Object(i.b)("p",null,"The KVM version of the latest vqfx10k routing engine VM (vqfx10k-re-15_X53-D63) is broken, and will crash within minutes of trying to load it. There ",Object(i.b)("em",{parentName:"p"},"is")," a workaround, but it requires 7zip.  "),Object(i.b)("p",null,"What you\u2019ll need to do, is to download the Vagrant .box file of the new routing engine VM.  Once it\u2019s downloaded, you\u2019ll need to use 7zip to extract the .box file. You\u2019ll end up with a file without an extension. You need to extract that file with 7zip as well, which will output a file named \u201cpacker-virtualbox-ovf-1491593710-disk001.vmdk\u201d.  Feel free to rename it whatever you wish, making sure to leave the .vmdk extension alone.  You can then use that file for HDA in your vQFX RE VM. I\u2019ve tested it, and it works.  "))}h.isMDXComponent=!0},212:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return g}));var o=n(0),i=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),h=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=h(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=h(n),b=o,g=u["".concat(s,".").concat(b)]||u[b]||d[b]||a;return n?i.a.createElement(g,r(r({ref:t},c),{},{components:n})):i.a.createElement(g,r({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=b;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var c=2;c<a;c++)s[c]=n[c];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},213:function(e,t,n){"use strict";var o=n(0),i=n(52);t.a=function(){return Object(o.useContext)(i.a)}},214:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(76);var o=n(213),i=n(215);function a(e,t){var n=void 0===t?{}:t,a=n.forcePrependBaseUrl,s=void 0!==a&&a,r=n.absolute,l=void 0!==r&&r,c=Object(o.a)().siteConfig,h=(c=void 0===c?{}:c).baseUrl,u=void 0===h?"/":h,d=c.url;if(!e)return e;if(s)return u+e;if(!Object(i.a)(e))return e;var b=u+e.replace(/^\//,"");return l?d+b:b}},215:function(e,t,n){"use strict";function o(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}n.d(t,"a",(function(){return o}))}}]);