#!/bin/bash

#echo "******************"
#echo "Install MongoDB..."
#echo "******************"
apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
echo "deb http://repo.mongodb.org/apt/ubuntu "$(lsb_release -sc)"/mongodb-org/3.0 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-3.0.list
apt-get -qq update
apt-get -q -y install mongodb-org

sed -i '/bind_ip /s/^/#/' /etc/mongod.conf
service mongod restart
