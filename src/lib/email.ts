import { Resend } from 'resend';

export const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendWelcomeEmail(to: string, name: string) {
  await resend.emails.send({
    from: 'noreply@mandabot.com',
    to,
    subject: `Welcome to MandaBot!`,
    html: `
      <h1>Welcome, ${name}!</h1>
      <p>Thanks for joining MandaBot. Learn Mandarin the fun way — built for little learners</p>
      <p><a href="${process.env.NEXT_PUBLIC_APP_URL}/dashboard">Go to your dashboard →</a></p>
    `,
  });
}
