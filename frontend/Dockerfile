FROM node:18-alpine

COPY . /app
WORKDIR /app

RUN cd /app \
    && yarn \
    && yarn next telemetry disable \
    && yarn next build

CMD yarn start
