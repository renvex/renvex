'use server';

import nodemailer from 'nodemailer';

import type { ContactFormSchema } from '../model/schema';

export const sendForm = async ({
  email,
  firstName,
  lastName,
  message,
  phone,
}: ContactFormSchema) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"Renvex Contact" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: email,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      text: `
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone ?? 'N/A'}
Message:
${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return { success: true };
  } catch (err) {
    console.error('Email error:', err);
    return { success: false, error: 'Failed to send email.' };
  }
};
