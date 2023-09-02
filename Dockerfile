FROM node:16


WORKDIR /publicIP

COPY package*.json .

RUN npm install

COPY . .
EXPOSE 1001
CMD [ "node", "index.js" ]