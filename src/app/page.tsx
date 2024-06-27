import { Button } from "src/components/ui/button";
import { Form, FormField } from "src/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod"
import { useEffect } from "react";

import { signup, login } from "src/utils/auth";



export default function Home() {
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <main>
      <body>
    <div className="flex min-h-screen flex-col items-center">
      <header className="container z-40 bg-background">
        <h1 className="flex h-20 text-grey text-2xl items-center justify-between py-6 ">
        Extra surface
        </h1>
    </header>


 <form>
<label htmlFor="email">Email:</label>
<input id="email" name="email" type="email" required />
<label htmlFor="password">Password:</label>
<input id="password" name="password" type="password" required />
<Button formAction={login}>Login</Button>
<Button formAction={signup}>SignUp</Button>
</form> 
</div>
</body>
</main>

  )



}