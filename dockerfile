FROM node:22-alpine3.19

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./

RUN npm install --force

COPY . .

# RUN npx prisma generate

EXPOSE 3004