FROM iojs:4

RUN mkdir /src

WORKDIR /src
ADD . /src

RUN npm install
RUN npm i node-sass
RUN npm run build

ENV NODE_ENV="production"

CMD npm run docker
