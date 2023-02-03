#!/bin/sh
git pull
npm run build
service nginx restart
