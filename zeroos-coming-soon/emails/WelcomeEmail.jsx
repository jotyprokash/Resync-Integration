// emails/WelcomeEmail.jsx
// Branded HTML email built with @react-email/components

import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components'

export function WelcomeEmail({ email = '' }) {
  return (
    <Html>
      <Head />
      <Preview>You're on the list — we'll let you know the moment we launch 🎉</Preview>
      <Body style={s.body}>
        <Container style={s.container}>

          {/* ── Dark header with logo ── */}
          <Section style={s.header}>
            <Text style={s.logo}>✦ ZEROOS</Text>
          </Section>

          {/* ── Hero ── */}
          <Section style={s.hero}>
            <Heading style={s.heading}>You're on the list.</Heading>
            <Text style={s.heroSub}>
              Something big is coming — and you'll be the first to know.
            </Text>
          </Section>

          {/* ── Body copy ── */}
          <Section style={s.bodySection}>
            <Text style={s.bodyText}>Hi there,</Text>
            <Text style={s.bodyText}>
              Thank you for subscribing! We're putting the final touches on our
              store and we can't wait to share it with you.
            </Text>
            <Text style={s.bodyText}>
              When we launch, you'll be among the very first to get access —
              along with any exclusive early-bird offers we have lined up.
            </Text>
          </Section>

          {/* ── CTA ── */}
          <Section style={s.ctaSection}>
            <Button style={s.button} href="https://zeroos.com">
              Visit Our Website
            </Button>
          </Section>

          <Hr style={s.hr} />

          {/* ── Footer ── */}
          <Section style={s.footer}>
            <Text style={s.footerText}>© 2026 ZeroOS. All rights reserved.</Text>
            <Text style={s.footerText}>
              You received this because you signed up at zeroos.com
            </Text>
            <Text style={s.footerText}>
              <a href="https://zeroos.com/unsubscribe" style={s.link}>
                Unsubscribe
              </a>
            </Text>
          </Section>

        </Container>
      </Body>
    </Html>
  )
}

// ── Inline styles (required for email clients) ────────────────────────────────

const s = {
  body: {
    backgroundColor: '#f4f1eb',
    fontFamily: "'DM Sans', Arial, sans-serif",
    margin: 0,
    padding: '40px 0',
  },
  container: {
    backgroundColor: '#ffffff',
    maxWidth: '560px',
    margin: '0 auto',
    borderRadius: '12px',
    overflow: 'hidden',
    border: '1px solid #e5dfd5',
  },
  header: {
    backgroundColor: '#0a0a0f',
    padding: '24px 40px',
    textAlign: 'center',
  },
  logo: {
    color: '#c8a96e',
    fontSize: '13px',
    fontWeight: '700',
    letterSpacing: '0.2em',
    margin: 0,
  },
  hero: {
    backgroundColor: '#0a0a0f',
    padding: '36px 40px 32px',
    textAlign: 'center',
  },
  heading: {
    color: '#f5f0e8',
    fontSize: '40px',
    fontFamily: 'Georgia, serif',
    fontWeight: '700',
    margin: '0 0 10px',
    lineHeight: '1.1',
  },
  heroSub: {
    color: 'rgba(245,240,232,0.55)',
    fontSize: '15px',
    fontWeight: '300',
    margin: 0,
    letterSpacing: '0.03em',
  },
  bodySection: {
    padding: '32px 40px 8px',
  },
  bodyText: {
    color: '#3a3530',
    fontSize: '15px',
    lineHeight: '1.7',
    margin: '0 0 14px',
  },
  ctaSection: {
    padding: '8px 40px 32px',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#c8a96e',
    color: '#0a0a0f',
    fontSize: '13px',
    fontWeight: '600',
    letterSpacing: '0.08em',
    padding: '13px 30px',
    borderRadius: '100px',
    textDecoration: 'none',
    display: 'inline-block',
  },
  hr: {
    borderColor: '#e5dfd5',
    margin: '0 40px',
  },
  footer: {
    padding: '20px 40px 28px',
    textAlign: 'center',
  },
  footerText: {
    color: '#aaa',
    fontSize: '12px',
    margin: '0 0 4px',
    lineHeight: '1.6',
  },
  link: {
    color: '#c8a96e',
    fontSize: '12px',
  },
}
