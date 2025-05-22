# Menggunakan image resmi Nginx versi terbaru
FROM nginx:latest

# Menghapus default content Nginx
RUN rm -rf /usr/share/nginx/html/*

# Menyalin file website statis ke direktori default Nginx
COPY index.html /usr/share/nginx/html/index.html

# Mengekspos port 80 untuk akses HTTP
EXPOSE 80