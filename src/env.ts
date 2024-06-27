import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";
export const env = createEnv({
  server: {
    STRIPE_PUBLIC_KEY: z.string(),
    STRIPE_SECRET_KEY: z.string(),
    NEXT_SUPABASE_PUBLIC_KEY: z.string(),
    PROJECT_REF : z.string(),
    RESEND_API_KEY: z.string(),
  },
  client: {
    NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string(),
    NEXT_PUBLIC_SUPABASE_URL: z.string(),
    NEXT_PUBLIC_STRIPE_PUBLIC_KEY: z.string(),
    NEXT_PUBLIC_STRIPE_SECRET_KEY: z.string(),
    NEXT_PUBLIC_RESEND_API_KEY: z.string(),
    
  },
  runtimeEnv: {
    STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY,
STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
NEXT_SUPABASE_PUBLIC_KEY: process.env.NEXT_SUPABASE_PUBLIC_KEY,
NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
PROJECT_REF: process.env.PROJECT_REF,
NEXT_PUBLIC_SUPABASE_URL:process.env.NEXT_PUBLIC_SUPABASE_URL ,
RESEND_API_KEY: process.env.RESEND_API_KEY,
NEXT_PUBLIC_STRIPE_PUBLIC_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY,
NEXT_PUBLIC_STRIPE_SECRET_KEY: process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY,
NEXT_PUBLIC_RESEND_API_KEY: process.env.NEXT_PUBLIC_RESEND_API_KEY,
},
});
