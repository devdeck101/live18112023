import prisma from "@/prisma/db"

export async function optIn(email: string) {

    try {
        const hasEmail = await prisma.newsletter.findUnique({
            where: {
                email
            }
        })

        console.log(hasEmail)

        if(!hasEmail) {
            const optIn = await prisma.newsletter.create({
                data: {
                    email
                }
            })
        }

    }catch(err){
        console.log("DEU RUIM")
        console.error(err)
    }


 
}


export async function optOut(email: string) {
 
}