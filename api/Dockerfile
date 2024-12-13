FROM node:lts-alpine
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npx knex migrate:latest
RUN npx knex seed:run

EXPOSE 3000
CMD ["npm", "run", "start"]
