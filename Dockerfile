FROM node:16-alpine
WORKDIR /usr/src/app

RUN npm install -g serve

COPY dist .
