FROM node:18.17.0
ARG uid
WORKDIR /app
ADD . /app
RUN npm install
ENV UID ${uid}
CMD npm run build && chown -R $UID:$UID 