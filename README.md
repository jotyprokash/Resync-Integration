<p align="center">
  <img src="https://dummyimage.com/1200x360/0a0a0f/c8a96e.png&text=RESYNC+INTEGRATION" alt="Resync Integration banner" width="100%" />
</p>

# Resync Integration

Subscription form integration with database capture, email notifications, and deployment-ready server handling.

## Overview

The app captures visitor email submissions, stores them in Supabase, and sends confirmation plus admin notification emails through Resend. Mailbox hosting can stay on a separate provider such as Zoho, while transactional sending is handled by Resend.

## Architecture

The runtime is intentionally small: the public form posts to the application API, the API persists the subscription record, and transactional email is sent through the configured provider. DNS, sender identity, and mailbox routing stay outside the application runtime.

<p align="center">
  <img src="docs/architecture.svg" alt="Subscription integration architecture" width="100%" />
</p>

## Configuration

Copy `.env.example` to `.env` for local development and set the same values in your deployment environment.

```bash
cp .env.example .env
```

Use real domain, sender, and inbox values only in environment variables. Do not commit `.env`.

## Docker Deployment

Build the image from the project root:

```bash
docker build -t app-service .
```

Run the container with environment variables from `.env`:

```bash
docker run -d --name app-service --env-file .env -p 8080:8080 app-service
```

For updates, pull the latest code, rebuild the image, and replace the running container:

```bash
git pull origin main
docker build -t app-service .
docker stop app-service
docker rm app-service
docker run -d --name app-service --env-file .env -p 8080:8080 app-service
```

Verify the service:

```bash
docker logs app-service --tail 50
curl http://localhost:8080
```

## Stack

- React + Vite
- Supabase
- Resend
- Vercel / Express Docker runtime
