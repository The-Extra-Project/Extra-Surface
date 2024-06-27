'use server'

import Stripe from 'stripe';
import { stripe } from 'src/utils/stripe/config';
import { createClient } from 'src/utils/supabase_server';
import { Database } from 'src/utils/types_db';

type order = Database["public"]["Tables"]["payment"];

// type CheckoutResponse = {
//     errorRedirect?: string;
//     sessionId?: string;
//   };

// export async function checkOutWithStripe(orderDetails: order, redirectPath: string = "/dashboard" ): Promise<CheckoutResponse> {
// try {
//     const supabase = createClient();
//     const {
//         error,
//         data: { user }
//       } = await supabase.auth.getUser();


//       if(error || !user) {
//         console.error(error);
//         throw new Error('Could not get user session from supabase');  
//       }
// }
// return {
//     errorRedirect: `/login?redirectTo=${redirectPath}`,
//     sessionId: ""
// }

// }