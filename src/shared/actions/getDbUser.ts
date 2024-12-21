'use server'

import { dbConnect } from "@/shared/database/db"
import { User } from "@/shared/database/models/User";
import IUser from "@/shared/interfaces/Models/IUser";
import { auth, currentUser } from "@clerk/nextjs/server";

 
export async function getDbUser(clerkUserId?: string) {
    await dbConnect();
    let id = clerkUserId;
    if(!clerkUserId)
    {
        id = (await currentUser())!.id;
    }
    const dbUser = await User.findOne<IUser>({ externalId: id });
    
    const data = JSON.parse(JSON.stringify(dbUser)) as IUser;

    return data;
}