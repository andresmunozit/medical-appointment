# Define the image
FROM node:14.5.0-stretch

# Define the working directory
WORKDIR /usr/src/app

# Copy the package* files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application files
COPY . .

# Command to run the container
CMD ["node", "./src/index.js"]