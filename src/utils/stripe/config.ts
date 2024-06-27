
import Stripe from 'stripe';
import { config, configDotenv } from "dotenv";
import path from 'path';
import { env } from 'src/env';
// configDotenv(
//   {
//         path: path.resolve( __dirname , '../../../.env'),
//     }
// );
export const stripe = new Stripe(env.NEXT_PUBLIC_STRIPE_SECRET_KEY || '',
    {
        // https://github.com/stripe/stripe-node#configuration
        // https://stripe.com/docs/api/versioning
        // @ts-ignore
        apiVersion: null,
        // Register this as an official Stripe plugin.
        // https://stripe.com/docs/building-plugins#setappinfo
        appInfo: {
          name: 'Extra Surface',
          version: '0.0.1',
          url: 'https://github.com/The-Extra-Project/Extra-Surface',
        }
      }
)


export const loadStripe = async () : Promise<Stripe | null> => {
    return await loadStripe();
}