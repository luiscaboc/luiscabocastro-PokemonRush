FROM node:18-bullseye-slim

ADD . /app/pokemon-game
WORKDIR /app/pokemon-game

RUN npm install
RUN npm run build

ENTRYPOINT [ "npm","run","start"]