FROM node

WORKDIR /server.js

COPY . .

EXPOSE 3000

CMD ["npm", "start"]