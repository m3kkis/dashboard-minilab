#!/bin/sh
git pull
npm i
npm run build
service nginx restart
