FROM node:15.2.0

WORKDIR /app
RUN apt-get update && apt-get -y upgrade && apt-get install -y vim dnsutils

ENTRYPOINT [ "tail", "-f" ]
