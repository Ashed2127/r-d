FROM node:current-alpine3.23
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN chown -R node:node /app
USER node
ENV API_URL=http://localhost:3000
EXPOSE 5173
CMD ["npm", "start"]