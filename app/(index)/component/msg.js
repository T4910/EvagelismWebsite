'use server'
import { cookies } from 'next/headers'
import nodemailer from 'nodemailer'


export default async function SendEmail(prevState, formData){
    if (prevState.state == 'err') return {state: null} // reset the form

    const surname = formData.get('surname')
    const othernames = formData.get('othername')
    const email = formData.get('email')

    if (!surname || !email || !othernames) return {state: 'err'}
    const name = surname.toUpperCase() + ' ' + othernames

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

      if (!cookies().get('dxs6yt532')?.value) cookies().set('dxs6yt532', true)
    
      return {state: 'ok'}
    } catch (error) {
        return {state: 'err'}
    }
  }
