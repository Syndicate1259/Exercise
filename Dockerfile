FROM node:17

WORKDIR /usr/src/exercise

# App dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 80

CMD [ "node", "app.js" ]
