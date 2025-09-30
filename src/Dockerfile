# ./src/Dockerfile

FROM nginx:1.27.5-alpine

# Copy the static blog files
COPY . /usr/share/nginx/html

# Copy the new Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf