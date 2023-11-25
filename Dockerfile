ENV LANG=en_US.UTF-8
ENV LANGUAGE=en_US:en
ENV LC_ALL=en_US.UTF-8

FROM node:18-alpine AS build

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]
RUN npm ci

COPY . .

ENV NODE_ENV=production
RUN npm run build --if-present
RUN npm prune --omit=dev

# Second stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html