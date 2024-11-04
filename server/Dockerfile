FROM node:22.11.0

run mkdir app
workdir app

copy package.json /app/
run npm install

copy . /app/

cmd node server start

expose 3000
