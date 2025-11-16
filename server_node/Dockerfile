ARG NODE_VERSION=24.0.2

FROM node:${NODE_VERSION}

ENV NOD_ENV production

WORKDIR /usr/src/app

RUN --mount=type=bind,source=package.json,target=./package.json \
    --mount=type=bind,source=package-lock.json,target=./package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev

COPY . .

EXPOSE 3000

CMD node index.js