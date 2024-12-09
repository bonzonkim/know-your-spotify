FROM node:21
WORKDIR /app
COPY package.json .
RUN yarn install
COPY server/ /app
EXPOSE 9000
CMD ["node", "index.js"]
