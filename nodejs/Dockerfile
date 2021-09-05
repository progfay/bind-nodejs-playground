FROM node:latest

WORKDIR /app
RUN apt-get update && apt-get -y upgrade && apt-get install -y vim dnsutils

ENTRYPOINT [ "tail", "-f" ]
