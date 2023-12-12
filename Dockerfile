FROM node:18.17.0
ARG uid
WORKDIR /app
ADD . /app
RUN npm install
ENV UID ${uid}
CMD sleep 3600 && npm run build && chown -R $UID:$UID build