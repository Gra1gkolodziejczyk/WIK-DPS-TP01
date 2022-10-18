FROM node:latest as builder
WORKDIR /app
COPY . .
RUN npm install

FROM node:latest as runner
WORKDIR /app
COPY --from=builder ./app/build ./build
COPY --from=builder ./app/node_modules /node_modules
CMD ["node", "build/index.js"]


