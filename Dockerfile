# ==========================================
# Stage 1: Build the React Application
# ==========================================
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# This creates the /app/build folder
RUN npm run build 

# ==========================================
# Stage 2: Serve the App with Nginx
# ==========================================
FROM nginx:alpine

# Copy the built React files from Stage 1 to Nginx's public folder
COPY --from=build /app/build /usr/share/nginx/html

# Delete the default Nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy your new separated config files into Nginx
COPY nginx/*.conf /etc/nginx/conf.d/

# Expose both HTTP and HTTPS ports
EXPOSE 80 443

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]