FROM node:22.11.0 as build

run mkdir app
workdir app

copy package*.json ./
run npm install

copy . ./
run npm run build

FROM nginx

copy --from=build /app/dist/. /usr/share/nginx/html
copy --from=build /app/my-nginx-app/nginx.conf /etc/nginx/conf.d/default

expose 80
expose 3000
cmd [ "nginx", "-g", "daemon off;" ]
