# Stage-1
FROM node:18-alpine AS build-env

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

# Stage-2 

FROM gcr.io/distroless/nodejs18-debian11

COPY --from=build-env /usr/src/app /usr/src/app

WORKDIR /usr/src/app

CMD ["index.js"]