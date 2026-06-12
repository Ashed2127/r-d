FROM node:22-alpine

RUN addgroup -S app && adduser -S app -G app

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN chown -R app:app /app

USER app

ENV API_URL=http://api.myapp.com/

EXPOSE 3000

CMD ["npm", "start"]