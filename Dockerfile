# ==========================================
# STAGE 1: The Build Environment
# ==========================================
FROM node:18-alpine AS build
WORKDIR /app

# Copy your package files and install ALL dependencies
COPY package*.json ./
RUN npm ci

# Copy the rest of your React code and build it
COPY . .
RUN npm run build


# ==========================================
# STAGE 2: The Lightweight Production Environment
# ==========================================
FROM node:18-alpine
WORKDIR /app

# Only copy the final 'build' folder from Stage 1
COPY --from=build /app/build ./build

# Copy your server file and package files
COPY server.js ./
COPY package*.json ./

# Install ONLY production dependencies (like Express) to save space
RUN npm ci --only=production

# Expose port 8080 to match our hardcoded server.js
EXPOSE 8080

# Start the Express server
CMD ["node", "server.js"]