FROM node:19-alpine3.16

ENV NODE_ENV=production

EXPOSE 80
RUN mkdir -p /app
WORKDIR /app
COPY package.json .
COPY package-lock.json .

RUN npm i --production

COPY dist/apps/nx02/ .

ENV ENV=local
ENV DEBUG=0
ENV PORT=80
ENV MONGO_HOST=localhost
ENV MONGO_PORT=27017
ENV MONGO_DATABASE=catDemo

CMD [ "node", "main.js" ]
