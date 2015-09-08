### Wall Vagrant ###

* This project has these VMs (vm_name): mongodb

### Setup ###

-  Install [VirtualBox](https://www.virtualbox.org/wiki/Downloads)
-  Install [Vagrant](http://www.vagrantup.com/downloads.html)
-  **If you are behind a corporate proxy**

>Run `export http_proxy=http://user:pass@server:port`

>Run `vagrant plugin install vagrant-proxyconf`

>Then `export VAGRANT_HTTP_PROXY=$http_proxy`

>Then `export VAGRANT_HTTPS_PROXY=$http_proxy`

1. Add Vagrant Box, run `vagrant box add ubuntu/trusty64`
1. Run `vagrant up`, this will start all Virtual Machines

### VMs Ports ###

* MongoDB: 27017

### Vagrant commands ###

1. vagrant up "vm_name" to create and start
1. vagrant halt "vm_name" to shutdown
1. vagrant suspend "vm_name" to save VM state
1. vagrant resume "vm_name" to load the previous saved state

**If you don't use the "vm_name", the command will run to all VMs**
