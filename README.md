# Resync Integration

<p>
  <img alt="React" src="https://img.shields.io/badge/React-20232a?style=flat&logo=react&logoColor=61dafb" />
  <img alt="Vite" src="https://img.shields.io/badge/Vite-646cff?style=flat&logo=vite&logoColor=ffffff" />
  <img alt="Node.js" src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=ffffff" />
  <img alt="Express" src="https://img.shields.io/badge/Express-111111?style=flat&logo=express&logoColor=ffffff" />
  <img alt="Supabase" src="https://img.shields.io/badge/Supabase-3ecf8e?style=flat&logo=supabase&logoColor=ffffff" />
  <img alt="Resend" src="https://img.shields.io/badge/Resend-000000?style=flat&logo=resend&logoColor=ffffff" />
  <img alt="Docker" src="https://img.shields.io/badge/Docker-2496ed?style=flat&logo=docker&logoColor=ffffff" />
  <img alt="Nginx" src="https://img.shields.io/badge/Nginx-009639?style=flat&logo=nginx&logoColor=ffffff" />
  <img alt="AWS" src="https://img.shields.io/badge/AWS-232f3e?style=flat&logo=amazonaws&logoColor=ffffff" />
</p>

A deployment-ready subscription workflow that captures visitor emails, stores them in Supabase, sends confirmation and admin notification emails through Resend, and runs as a containerized service behind a reverse proxy.

## Architecture

<p align="center">
  <img src="docs/architecture.svg" alt="Subscription integration architecture" width="100%" />
</p>

## Runtime Setup

Create the local environment file from the example template:

```bash
cp .env.example .env
```

Set production values only through environment variables or the deployment host. Keep `.env` and service credentials out of version control.

## Docker Operations

Build the application image:

```bash
docker build -t app-service .
```

Run the service with the configured environment:

```bash
docker run -d --name app-service --env-file .env -p 8080:8080 app-service
```

Deploy an update:

```bash
git pull origin main
docker build -t app-service .
docker stop app-service
docker rm app-service
docker run -d --name app-service --env-file .env -p 8080:8080 app-service
```

Check the running service:

```bash
docker logs app-service --tail 50
curl http://localhost:8080
```

## Stack

- React + Vite
- Express
- Supabase
- Resend
- Docker
