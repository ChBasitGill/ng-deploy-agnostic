#!/bin/bash
if [[ $ENVIRONMENT == "Prod" ]]; then
  cp /usr/share/nginx/html/config/app-config.prod.json /usr/share/nginx/html/app-config.json
else
  cp /usr/share/nginx/html/config/app-config.dev.json /usr/share/nginx/html/app-config.json
fi

nginx -g 'daemon off;'