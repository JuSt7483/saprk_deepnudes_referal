import { dbConnect } from "@/shared/database/db";
import { User } from "@/shared/database/models/User";
import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    await dbConnect();

    const user = await currentUser()

    if (!user) {
      return NextResponse.json({ error: {
        message: "Unauthorized"
      } }, { status: 401 })
    }
    const referalString = req.nextUrl.searchParams.get("referal");
    const referalOwner = await User.findOne({ referalString: referalString });
    if(referalOwner) {
        console.log("referal add from API: ", new Date())
        referalOwner.referals.push({
            email: user.emailAddresses[0].emailAddress,
            value: 15
        })
        referalOwner.dollars += 15
        await referalOwner.save()
    }

    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/account`)
}