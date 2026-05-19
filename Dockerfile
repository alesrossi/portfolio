FROM nginx:1.27-alpine

COPY site/ /usr/share/nginx/html/
COPY CV.pdf /usr/share/nginx/html/CV.pdf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Give nginx user read access to the static files
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD wget -qO- http://localhost/ >/dev/null || exit 1