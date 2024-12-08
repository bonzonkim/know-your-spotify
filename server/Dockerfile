FROM node:21
WORKDIR /app
COPY package.json .
RUN yarn install
COPY . .
EXPOSE 9000
CMD ["node", "index.js"]
