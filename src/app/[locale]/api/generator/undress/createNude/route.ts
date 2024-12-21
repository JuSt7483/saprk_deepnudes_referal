// import { dbConnect } from "@/database/db";
// import { User } from "@/database/models/User";
import { downloadAndCompressImage } from "@/shared/utils/downloadAndCompressImage";
import { currentUser } from "@clerk/nextjs/server";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  imageUrl: z.string().url()
});

export async function POST(req: NextRequest) {
    const body = await req.json();
    const response = schema.safeParse(body);

    // If the request body is invalid, return a 400 error with the validation errors
    if (!response.success) {
      const { errors } = response.error;
    
      console.error(errors)
      return NextResponse.json({
        error: { message: "Invalid request", errors },
      }, { status: 500 });
    }
    
    // Now you can safely use the data to create a user
    const { imageUrl } = response.data;

    const image = await downloadAndCompressImage(imageUrl, 1);
    const imageString = `data:image/jpeg;base64,${image}`

    // await dbConnect(); 
    // console.log(req)
    // const user = await currentUser()

    const data = await fetch(`${process.env.AI_URL}/createNude`, {
        method: "POST",
        body: JSON.stringify({
            image: imageString
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    const blob = await data.blob();
    const text = await blob.arrayBuffer();
    return new Response(text, { 
        headers: {
            "Content-Type": "text/plain"
        }
    });

    // if (!user) {
    //     return NextResponse.json({ error: {
    //         message: "Unauthorized"
    //     } }, { status: 401 })
    // }

    // const dbUser = await User.findOne({
    //     externalId: user.id
    // });
    // if(dbUser)
    // {
    //     // if(dbUser.coins < 1)
    //     // {
    //     //     return NextResponse.json({ error: {
    //     //         message: "No balance"
    //     //     } }, { status: 403 })
    //     // }
        
    //     const data = await fetch(`${process.env.API_AI}/gen/animePicture`, {
    //         method: "POST",
    //         body: JSON.stringify({
    //             prompt: body.promt,
    //             width: body.width,
    //             height: body.height,
    //         }),
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     })
    //     const blob = await data.blob();
    //     const text = await blob.arrayBuffer();
    //     return new Response(text, { 
    //         headers: {
    //             "Content-Type": "text/plain"
    //         }
    //     });
    // }

    return NextResponse.json({ error: {
        message: "No user in database"
    } }, { status: 405 })
}