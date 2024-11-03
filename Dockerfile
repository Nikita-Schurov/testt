FROM node

run mkdir /app
workdir /app

copy package.json /app
run yarn install

copy . /app

run yarn test
run NODE_OPTIONS=--openssl-legacy-provider yarn build
cmd yarn start

expose 3000