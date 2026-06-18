<p align="center">
  <img src="https://dummyimage.com/1200x360/0a0a0f/c8a96e.png&text=RESYNC+INTEGRATION" alt="Resync Integration banner" width="100%" />
</p>

# Resync Integration

Subscription form integration with database capture, email notifications, and deployment-ready server handling.

## Overview

The app captures visitor email submissions, stores them in Supabase, and sends confirmation plus admin notification emails through Resend. Mailbox hosting can stay on a separate provider such as Zoho, while transactional sending is handled by Resend.

## Configuration

Copy `.env.example` to `.env` for local development and set the same values in your deployment environment.

```bash
cp .env.example .env
```

Use real domain, sender, and inbox values only in environment variables. Do not commit `.env`.

## Stack

- React + Vite
- Supabase
- Resend
- Vercel / Express Docker runtime
