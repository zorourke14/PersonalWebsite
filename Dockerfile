# Use Node.js official image as base
# Alpine version is used for a smaller image size
FROM node:24-alpine

# Set working directory in container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app for production
RUN npm run build

# Install serve to serve the built app
RUN npm install -g serve

# Expose port 3000
EXPOSE 3000

# Command to run the application - serve from 'dist' not 'build'
CMD ["serve", "-s", "dist", "-l", "3000"]