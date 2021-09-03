FROM ubuntu:latest

WORKDIR /etc/bind
RUN apt-get update && apt-get -y upgrade && apt-get install -y bind9 dnsutils
RUN rndc-confgen -a && chown root:root rndc.key
ADD ./misc/named.conf /etc/bind/named.conf
ADD ./misc/com.zone /etc/bind/com.zone

EXPOSE 53
ENTRYPOINT [ "/usr/sbin/named", "-g", "-4", "-c", "/etc/bind/named.conf" ]
