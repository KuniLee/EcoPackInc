# 1. Создаем приложение Angular
FROM node:18-alpine as builder

WORKDIR /app
COPY package.json package-lock.json ./

RUN npm i

COPY . .

RUN npm run build

# 2. Развертываем приложение Angular на NGINX
FROM nginx:alpine

# Заменяем дефолтную страницу nginx соответствующей веб-приложению
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder app/dist /usr/share/nginx/html

COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

ENTRYPOINT ["nginx", "-g", "daemon off;"]