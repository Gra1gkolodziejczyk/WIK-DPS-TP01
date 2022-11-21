FROM node:latest as builder
WORKDIR /TP
COPY . /TP
RUN npm install
RUN npx tsc

FROM node:latest
WORKDIR /app
COPY --from=builder ./TP/build .
COPY --from=builder ./TP/node_modules /node_modules
CMD node index.js