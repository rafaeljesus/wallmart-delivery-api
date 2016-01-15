FROM node:5

ADD . /wallmart-delivery-api

WORKDIR /wallmart-delivery-api

RUN npm i

CMD ["npm", "start"]
