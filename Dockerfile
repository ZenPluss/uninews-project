# Gunakan base image
FROM node:18-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy seluruh project
COPY . .

# Jalankan Next.js dalam mode development
CMD ["npm", "run", "dev"]
