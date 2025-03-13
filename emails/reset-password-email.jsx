import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

export const ResetPasswordEmail = ({
  email,
  resetPasswordToken,
}) => {
  const baseUrl = process.env.NEXTAUTH_URL;
  const resetPasswordUrl = `${baseUrl}/admin/reset-password/${resetPasswordToken}`;

  return (
    <Html>
      <Head />
      <Preview>Reset your password for GreenRoots Trading</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>Password Reset Request</Heading>
          <Section style={section}>
            <Text style={text}>Hello,</Text>
            <Text style={text}>
              We received a request to reset the password for your GreenRoots Trading account ({email}).
            </Text>
            <Text style={text}>
              Click the button below to reset your password. This link is valid for 24 hours.
            </Text>
            <Button style={button} href={resetPasswordUrl}>
              Reset Password
            </Button>
            <Text style={text}>
              If you didn't request this, you can safely ignore this email.
            </Text>
            <Text style={text}>
              For security, this request was received from {baseUrl}. If you did not request a password reset, please ignore this email.
            </Text>
          </Section>
          <Text style={footer}>
            Best regards,<br />
            The GreenRoots Trading Team
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
};

const heading = {
  fontSize: '24px',
  letterSpacing: '-0.5px',
  lineHeight: '1.3',
  fontWeight: '400',
  color: '#484848',
  padding: '17px 0 0',
};

const section = {
  padding: '0 48px',
};

const text = {
  margin: '0 0 12px',
  fontSize: '16px',
  lineHeight: '24px',
  color: '#484848',
};

const button = {
  backgroundColor: '#4CAF50',
  borderRadius: '5px',
  color: '#fff',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center',
  display: 'block',
  width: '100%',
  padding: '12px',
  margin: '24px 0',
};

const footer = {
  color: '#666',
  fontSize: '14px',
  lineHeight: '24px',
  padding: '0 48px',
};

export default ResetPasswordEmail;