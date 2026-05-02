# Build Stage
FROM node:lts AS build
WORKDIR /app
COPY . .
RUN npm install && npm run build

# Run Stage
FROM nginx:latest
COPY --from=build /app/dist/ng-deploy-agnostic/browser /usr/share/nginx/html
COPY ./entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/bin/bash", "/entrypoint.sh"]