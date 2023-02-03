#!/bin/sh
git pull
npm start build
sudo service nginx restart
