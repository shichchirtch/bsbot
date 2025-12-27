# ---------- build stage ----------
FROM node:20-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# ---------- runtime stage ----------
FROM nginx:1.25-alpine

COPY --from=build /app/dist /usr/share/nginx/html



#FROM node:20-alpine
#
#WORKDIR /app
#
#COPY package*.json ./
#RUN npm install
#
#COPY . .
#
#EXPOSE 5173
#
#CMD ["npm", "run", "dev", "--", "--host"]