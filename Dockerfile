# syntax=docker/dockerfile:1

# ---- deps: install node_modules ----
FROM node:22-alpine AS deps
WORKDIR /app
# libc6-compat: sharp / native deps on alpine.
RUN apk add --no-cache libc6-compat
COPY package.json package-lock.json ./
RUN npm ci

# ---- build: next build (Payload + web) ----
FROM node:22-alpine AS build
WORKDIR /app
RUN apk add --no-cache libc6-compat
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Build-time vars:
#  - PAYLOAD_SECRET: payload.config throws without it.
#  - DATABASE_URL: the homepage is prerendered and reads CMS globals from the DB.
#  - NEXT_PUBLIC_SITE_URL: baked into the client bundle.
#  - SITE_URL: used for canonical/OG metadata during prerender.
ARG PAYLOAD_SECRET
ARG DATABASE_URL
ARG NEXT_PUBLIC_SITE_URL
ARG SITE_URL
ENV PAYLOAD_SECRET=$PAYLOAD_SECRET \
    DATABASE_URL=$DATABASE_URL \
    NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL \
    SITE_URL=$SITE_URL \
    NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# ---- runtime: minimal standalone server ----
FROM node:22-alpine AS runtime
WORKDIR /app
RUN apk add --no-cache libc6-compat
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    HOSTNAME=0.0.0.0

# Run as the non-root node user that ships with the base image.
USER node

# Next standalone output bundles the traced server + its node_modules.
COPY --from=build --chown=node:node /app/public ./public
COPY --from=build --chown=node:node /app/.next/standalone ./
COPY --from=build --chown=node:node /app/.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]
