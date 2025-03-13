FROM node:20.11.1-alpine3.19

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./

RUN npm install 

COPY . .

# RUN npx prisma generate

EXPOSE 3004