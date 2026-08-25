# Dockerfile - entorno de desarrollo para Frontera de los Andes (Next.js)

FROM node:20-alpine

# Algunas deps nativas (ej. sharp, que usa next como optional dependency)
# necesitan estas libs en Alpine.
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Copiamos solo los manifests primero para aprovechar la cache de Docker:
# si no cambian package.json / package-lock.json, no se reinstala todo.
COPY package.json package-lock.json* ./

RUN npm install

# El resto del código se monta como volumen en docker-compose (ver abajo),
# pero lo copiamos también acá para poder buildear la imagen de forma standalone.
COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
