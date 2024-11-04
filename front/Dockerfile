FROM nginx

copy ./index.html /var/www/html/
copy /my-nginx-app/nginx.conf /etc/nginx/conf.d/default.conf

expose 80
expose 3000

cmd [ "nginx", "-g", "daemon off;" ]
