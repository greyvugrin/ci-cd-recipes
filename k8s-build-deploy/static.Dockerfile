FROM nginx:alpine

RUN echo '<!DOCTYPE html><html><head><title>Hello</title></head><body><h1>Hello from nginx</h1></body></html>' \
    > /usr/share/nginx/html/index.html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
