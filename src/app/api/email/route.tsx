'use server'
import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import { env } from 'src/env';

const resend = new Resend(env.RESEND_API_KEY || "");

export async function  POST(req: Request) {

    const { email, cost, URLs } = req.body;
    try {
        const { data, error } = await resend.emails.send({
        from: 'Extralabs <onboarding@resend.dev>',
        to: email,
        subject: 'Followup steps',
        text: `Thanks for using Extra surface, now for the next steps send us the receipt of your payment and then the compute operation will start
        Just to give you the recapitulative

        the cost of the payment is ${cost}
        and the tiles to be reconstructed are ${URLs}
        `,
      });
     
     return Response.json(data);

    } catch (error) {
      console.error('Error sending email:', error);
     return Response.json({ error: 'Error sending email' });
    }


    
    
  
}
