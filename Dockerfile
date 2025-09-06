# Simple static site using NGINX
FROM nginx:alpine


# Copy static assets to the default NGINX web root
COPY index.html /usr/share/nginx/html/index.html
COPY 404.html /usr/share/nginx/html/404.html
COPY styles.css /usr/share/nginx/html/styles.css
COPY script.js /usr/share/nginx/html/script.js


EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
