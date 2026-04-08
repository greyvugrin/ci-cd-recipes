FROM node:20-alpine AS build

WORKDIR /app

# Bootstrap a minimal React app via Vite without needing pre-existing source files
RUN npm create vite@latest . -- --template react --yes && \
    npm install && \
    npm run build

# Serve the static build with nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
