#!/bin/sh
# /home/site/wwwroot/startup.sh
apt-get install curl autoconf automake libtool pkg-config -y
#install git
apt install git
git clone https://github.com/openvenues/libpostal
cd libpostal
./bootstrap.sh
./configure --datadir=/home/site/wwwroot
make -j4
make install
ldconfig

#install pip
apt install python-pip

#install postal library
pip install postal

# start node
npm start
