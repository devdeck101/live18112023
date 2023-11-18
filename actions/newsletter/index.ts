"use server";

import { optIn } from "@/lib/newsletter";

import * as z from "zod"
 
const newsletterSchema = z.object({
  email: z.string().email("E-mail requerido.")
})

export async function signUpNewsletter(formData: FormData) {
    const email = formData.get("email")?.toString()
    const data = newsletterSchema.safeParse({email})
    if(data.success && email){
        optIn(email)
    }

}