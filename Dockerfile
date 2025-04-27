# syntax=docker/dockerfile:1

# Use a specific version of nginx alpine for better security and smaller size
FROM nginx:1.24.0-alpine

# Create a non-root user for running nginx
RUN adduser -D -H -u 1001 -s /sbin/nologin www-data && \
    mkdir -p /usr/share/nginx/html && \
    chown -R www-data:www-data /usr/share/nginx/html && \
    chown -R www-data:www-data /var/cache/nginx && \
    chown -R www-data:www-data /var/log/nginx && \
    touch /var/run/nginx.pid && \
    chown -R www-data:www-data /var/run/nginx.pid

# Set working directory
WORKDIR /usr/share/nginx/html

# Copy nginx configuration first since it changes less frequently
COPY --chown=www-data:www-data nginx.conf /etc/nginx/conf.d/default.conf

# Copy static files with explicit ownership
COPY --chown=www-data:www-data views/ ./
COPY --chown=www-data:www-data src/ ./src/
COPY --chown=www-data:www-data public/ ./public/

# Set environment variables
ENV NGINX_ENTRYPOINT_QUIET_LOGS=1

# Explicitly expose port
EXPOSE 80

# Switch to non-root user
USER www-data

# Use HEALTHCHECK to verify container health
HEALTHCHECK --interval=30s --timeout=3s \
    CMD wget --quiet --tries=1 --spider http://localhost:80 || exit 1

# Start Nginx
CMD ["nginx", "-g", "daemon off;"] 