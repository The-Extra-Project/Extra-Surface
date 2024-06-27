import { Database, Tables } from 'src/utils/types_db';
import {stripe} from "src/utils/stripe/config";
import {SupabaseClient} from "@supabase/supabase-js"
import { cache } from 'react';
type JobOrder = Tables<'selectionjob'>
type ExtraSurface = Tables<'extra_surface'>
type Payment = Tables<'payment'>


//var elementsCreation = stripe.climate.orders()

export const getUser = cache(async (supabase: SupabaseClient<Database>) => {
  const {
    data: { user }
  } = await supabase.auth.getUser();
  return user;
});


// export const getPaymentOrder = cache(async (supabase :SupabaseClient<Database>) => {
//     let user = getUser(createClient)
//     const {data: any, error} = await supabase.from("extra_surface").select('*').eq('selection_job_id', user.job_history?.[0]?.job_id)
//     .order('payment_id', { ascending: false })
//     .limit(1);
//     });

