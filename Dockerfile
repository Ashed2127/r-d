#FROM node:22-alpine

#RUN addgroup -S app && adduser -S app -G app

#WORKDIR /app
#RUN mkdir data

#COPY package*.json ./
#RUN npm install

#RUN chown -R app:app /app

#USER app

#ENV API_URL=http://api.myapp.com/

#EXPOSE 3000

#CMD ["npm", "start"]

FROM node:22-alpine

# Create the user and group
RUN addgroup -S app && adduser -S app -G app

# Set the working directory
WORKDIR /app

# Ensure /app is owned by 'app'
RUN chown -R app:app /app

# Copy package files and install
COPY --chown=app:app package*.json ./
RUN npm install

# Copy the rest of the source code
COPY --chown=app:app . .

# Switch to the user
USER app

ENV API_URL=http://api.myapp.com/

EXPOSE 5173

CMD ["npm", "start"]