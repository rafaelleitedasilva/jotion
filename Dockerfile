FROM node:18

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm","run","dev"]

HEALTHCHECK CMD curl --fail http://localhost:3000 || exit 1