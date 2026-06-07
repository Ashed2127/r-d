FROM node:current-alpine3.23
RUN addgroup app && adduser -S -G app app
USER app
WORKDIR /app
COPY . .
RUN npm install
ENV API_URL=http://localhost:3000
EXPOSE 3000

#shell form
CMD npm start