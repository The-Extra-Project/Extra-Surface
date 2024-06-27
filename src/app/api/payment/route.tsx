
import { NextRequest, NextResponse } from "next/server";
import { stripe } from "src/utils/stripe/config";

export async function POST(request: NextRequest) {
    try {
      const { amount } = await request.json();
        
      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: "eur",
        automatic_payment_methods: { enabled: true },
      });
  
      return NextResponse.json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
      console.error("Internal Error:", error);
      // Handle other errors (e.g., network issues, parsing errors)
      return NextResponse.json(
        { error: `Internal Server Error: ${error}` },
        { status: 500 }
      );
    }
  }