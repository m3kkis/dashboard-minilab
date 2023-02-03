#!/bin/sh
git pull
npm run build
sudo service nginx restart
