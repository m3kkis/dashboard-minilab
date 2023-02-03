FROM node:19-alpine
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 4173
CMD ["npm", "run","build"]
CMD ["npm", "run","preview"]