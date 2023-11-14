'use server'
import nodemailer from 'nodemailer'

export default async function SendEmail(form){
    const surname = form.get('surname')
    const othernames = form.get('othername')
    const email = form.get('email')

    const name = surname.toUpperCase() + ' ' + othernames
    if (!name || !email || !othernames) return 

    try {
      // Set up nodemailer transporter
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.NEXT_PUBLIC_MAIL_USER,
          pass: process.env.NEXT_PUBLIC_MAIL_PASS,
        },
        // remove in production
        tls: {
          rejectUnauthorized: false,
        },
      });

      // Send mail with defined transport object
      const info = await transporter.sendMail({
        from: process.env.NEXT_PUBLIC_MAIL_USER,
        to: process.env.NEXT_PUBLIC_MAIL_DESTINATION,
        subject: 'New Member Request',
        text: `Name: ${name}\nEmail: ${email}`,
      });

      console.log('Message sent: %s', info.messageId);

      return console.log({ message: 'Form submitted successfully' });
    } catch (error) {
        return console.error('Error sending email:', error);
    }
  }
