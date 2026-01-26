# Use a modern Node LTS image
FROM node:20-slim

# Install basic build tools if needed by dependencies
RUN apt-get update && apt-get install -y python3 make g++ && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Define the build argument for FontAwesome
ARG NPMRC_FONTAWESOME_PACKAGE_TOKEN
ENV NPMRC_FONTAWESOME_PACKAGE_TOKEN=${NPMRC_FONTAWESOME_PACKAGE_TOKEN}

# Copy package manifests for caching
COPY package.json package-lock.json turbo.json .npmrc ./
COPY packages/react-components/package.json ./packages/react-components/
COPY packages/web-components/package.json ./packages/web-components/
COPY packages/tailwind-theme/package.json ./packages/tailwind-theme/
COPY packages/storybook/package.json ./packages/storybook/

# Install dependencies
# Using --unsafe-perm can sometimes help with Lerna/npm lifecycle scripts in Docker
RUN npm install

# Copy the rest of the source code
COPY . .

# Ensure the dev server listens on all interfaces
ENV HOST=0.0.0.0

# Expose the Storybook port (6007 as per README)
EXPOSE 6007