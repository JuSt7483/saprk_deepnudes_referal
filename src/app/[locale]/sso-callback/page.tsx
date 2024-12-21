import { AuthenticateWithRedirectCallback } from "@clerk/nextjs";

export default function Pending({
    searchParams,
}: {
    searchParams?:{ [key: string]: string | undefined };
}) {
    let signUpForceRedirectUrl;
    if(searchParams?.referal)
    {
        signUpForceRedirectUrl = "/api/account/referal.add?referal=" + searchParams?.referal + `${searchParams?.redirect ? "&redirect=" + searchParams?.redirect : ""}`
    }
    else
    {
        signUpForceRedirectUrl = searchParams?.redirect || "/generation"
    }
    return (<AuthenticateWithRedirectCallback 
                signInForceRedirectUrl={searchParams?.redirect || "/generation"}
                signUpForceRedirectUrl={signUpForceRedirectUrl}
            />)
}