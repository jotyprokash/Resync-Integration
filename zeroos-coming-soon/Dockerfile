# ── Stage 1: Build & Dependencies ──
FROM node:20-alpine AS builder
WORKDIR /app

# Install all dependencies (including dev) to build Vite
COPY package*.json ./
RUN npm ci

# Copy source and build frontend
COPY . .
RUN npm run build

# Install production dependencies explicitly for the server
# We remove the dev dependencies to keep the final image clean
RUN rm -rf node_modules
RUN npm ci --only=production && npm install express dotenv

# ── Stage 2: Production Distroless Runtime ──
# DevSecOps: Distroless images contain zero shell, apt, or utilities. 
# This shrinks the attack surface to almost zero.
FROM gcr.io/distroless/nodejs20-debian11 AS runner
WORKDIR /app

# Copy strictly what is needed from the builder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
COPY --from=builder /app/server.js ./

ENV PORT=8080
EXPOSE 8080

CMD ["server.js"]
