FROM node:23 AS build
WORKDIR /app
COPY package.json .
RUN yarn
COPY . .


FROM node:23-alpine
WORKDIR /app
COPY --from=build /app /app
EXPOSE 9000
CMD ["node", "index.js"]
