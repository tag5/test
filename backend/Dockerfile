FROM node:21 as build
WORKDIR /app
COPY *.json ./
RUN npm install
COPY ./src ./
RUN npm run build

FROM node:21
WORKDIR /app
COPY package*.json ./
RUN npm install --only=production
COPY --from=build /app/dist /app/dist
CMD ["node", "dist/main"]
