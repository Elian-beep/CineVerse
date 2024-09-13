FROM node:22-alpine3.19
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV NUXT_PORT=8080
EXPOSE 8080
CMD ["npm", "run", "dev"]