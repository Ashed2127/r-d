FROM node:current-alpine3.23
WORKDIR /app
COPY . .
RUN npm install
ENV API_URL=http://localhost:3000
EXPOSE 3000
RUN addgroup app && adduser -S -G app app
USER app