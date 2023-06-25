# Version referenced in package.json settings - this image is used to build code to retrieve static files (HTML, CSS, JS, assets...)
FROM node:18 as build

# Prepare work directory
WORKDIR /usr/src/app

# Copy package and package-lock in work directory ; then install all dependencies
COPY package*.json ./
RUN npm install --verbose

# Bundle app source
COPY . .

# Build the app
RUN npm run build

# NGINX server to serve static files found in /dist of our build
FROM nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Force PORT and expose the PORT from the container
ENV PORT 8080
EXPOSE 8080