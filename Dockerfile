FROM NODE:alpine

copy package.json package.json
run npm install

copy . .

