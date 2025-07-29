# 1. Base image
FROM node:18-alpine

# 2. Set working directory
WORKDIR /app

# 3. Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# 4. Copy the rest of the app
COPY . .

# 5. Expose port
EXPOSE 3000

# 6. Build the app
RUN npm run build

# 7. Start the app
CMD ["npm", "start"]
