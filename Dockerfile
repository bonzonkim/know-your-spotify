FROM node:21-alpine

WORKDIR /usr/src/app

COPY package.* ./
RUN npm install yarn
RUN yarn install
RUN yarn add axios
RUN yarn build


COPY . .

EXPOSE 9000
CMD ["yarn", "dev"]
