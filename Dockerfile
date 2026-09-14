#TODO: Melhorar este Dockerfile, verificar imagens mais leves, formas de build mais consistentes

# =========================
# Stage 1 - Build Angular
# =========================
FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build


# =========================
# Stage 2 - Nginx
# =========================
FROM nginx:alpine

# Remove configuração padrão
RUN rm /etc/nginx/conf.d/default.conf

# Nossa configuração
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia o build do Angular
COPY --from=build /app/dist/*/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]