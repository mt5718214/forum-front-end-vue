# base image
FROM node:16.14.0

LABEL author="tsungilin"

WORKDIR /app

#將本機端與 Dockerfile 同一層的所有檔案加到 Linux 的 /app 目錄底下
ADD . /app
RUN echo "build image"

#下載 nodejs 相依的 libraries
RUN npm install

#container 對外的埠號，再與外界溝通時使用
EXPOSE 8080

CMD npm run serve