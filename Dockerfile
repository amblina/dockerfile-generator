FROM centos:centos6
MAINTAINER Mohamed Labouardy <mohamed@labouardy.com>

# Install NodeJS & NPM
RUN     yum install -y epel-release
RUN     yum install -y nodejs npm

# Install app dependencies
COPY package.json /src/package.json
RUN cd /src; npm install

# Bundle app source
COPY . /src

# Expose Port
EXPOSE 3000
CMD ["node","server.js"]