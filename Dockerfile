FROM node:17

WORKDIR ../Exercise

# App dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 80

CMD [ "node", "app.js" ]
