# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm i -g @quasar/cli
COPY . .
RUN quasar build

# production stage
FROM nginx:stable-alpine as production-stage
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/dist/spa /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
