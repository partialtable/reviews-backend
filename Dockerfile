FROM node:12.18.3
RUN mkdir -p /app
WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 3002
CMD [ "npm", "start" ]