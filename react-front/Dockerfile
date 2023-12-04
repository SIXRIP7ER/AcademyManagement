FROM node:19.6.0

# EXPOSE 19000

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

# EXPOSE 3001

# CMD [ "npm", "run", "dev" ]