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

export function WelcomeEmail({
  email = '',
  siteName = 'Launch Updates',
  siteUrl = 'https://example.com',
}) {
  return (
    <Html>
      <Head />
      <Preview>Your waitlist request has been received.</Preview>
      <Body style={s.body}>
        <Container style={s.container}>

          {/* ── Dark header with logo ── */}
          <Section style={s.header}>
            <Text style={s.logo}>{siteName}</Text>
          </Section>

          {/* ── Hero ── */}
          <Section style={s.hero}>
            <Heading style={s.heading}>You're on the waitlist.</Heading>
            <Text style={s.heroSub}>
              We received your request and will let you know when access is available.
            </Text>
          </Section>

          {/* ── Body copy ── */}
          <Section style={s.bodySection}>
            <Text style={s.bodyText}>Hello,</Text>
            <Text style={s.bodyText}>
              Thanks for joining the {siteName} waitlist.
            </Text>
            <Text style={s.bodyText}>
              No action is needed from you right now. We'll send the next update
              to this email address.
            </Text>
          </Section>

          {/* ── CTA ── */}
          <Section style={s.ctaSection}>
            <Button style={s.button} href={siteUrl}>
              Visit website
            </Button>
          </Section>

          <Hr style={s.hr} />

          {/* ── Footer ── */}
          <Section style={s.footer}>
            <Text style={s.footerText}>© 2026 {siteName}. All rights reserved.</Text>
            <Text style={s.footerText}>
              You received this email because you joined the waitlist at {siteUrl}.
            </Text>
            <Text style={s.footerText}>
              <a href={`${siteUrl}/unsubscribe`} style={s.link}>
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
    backgroundColor: '#f6f4ef',
    fontFamily: "'DM Sans', Arial, sans-serif",
    margin: 0,
    padding: '40px 0',
  },
  container: {
    backgroundColor: '#ffffff',
    maxWidth: '560px',
    margin: '0 auto',
    border: '1px solid #e7e1d8',
  },
  header: {
    padding: '24px 40px',
    borderBottom: '1px solid #eee8df',
  },
  logo: {
    color: '#111111',
    fontSize: '14px',
    fontWeight: '700',
    letterSpacing: '0.16em',
    margin: 0,
    textTransform: 'uppercase',
  },
  hero: {
    padding: '36px 40px 10px',
  },
  heading: {
    color: '#111111',
    fontSize: '28px',
    fontFamily: 'Georgia, serif',
    fontWeight: '700',
    margin: '0 0 14px',
    lineHeight: '1.2',
  },
  heroSub: {
    color: '#4d4944',
    fontSize: '15px',
    lineHeight: '1.7',
    margin: 0,
  },
  bodySection: {
    padding: '14px 40px 8px',
  },
  bodyText: {
    color: '#4d4944',
    fontSize: '15px',
    lineHeight: '1.7',
    margin: '0 0 14px',
  },
  ctaSection: {
    padding: '8px 40px 32px',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#111111',
    color: '#ffffff',
    fontSize: '13px',
    fontWeight: '600',
    letterSpacing: '0.08em',
    padding: '13px 30px',
    textDecoration: 'none',
    display: 'inline-block',
  },
  hr: {
    borderColor: '#eee8df',
    margin: 0,
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
