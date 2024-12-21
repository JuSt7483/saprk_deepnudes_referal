"use client";

import React, { FormEvent } from 'react'
import { Link } from '@/i18n/routing';
import { OAuthStrategy } from '@clerk/types'
import { useAuth, useSignIn, useSignUp } from '@clerk/nextjs'
import { useRouter, useSearchParams } from 'next/navigation'
import { useTranslations } from 'next-intl';

import "./style.scss";
import Button from '@/components/UI/primitives/Button/Button';
import { CloseCircleIcon, DiscordLogo, FacebookLogo, GoogleLogo, LetterIcon, OutlookLogo, YahooLogo } from '@/components/UI/svg';

const LoginPage = () => {
    const { signIn } = useSignIn()
    const { isSignedIn } = useAuth()
    const { signUp, setActive, isLoaded } = useSignUp()
    const [emailAddress, setEmailAddress] = React.useState('')
    const [expired, setExpired] = React.useState(false)
    const [_, setVerified] = React.useState(false)
    const [submitted, setSubmitted] = React.useState(false)
    const router = useRouter()
    const searchParams = useSearchParams()
    // const t = useTranslations();

    if (!signIn || !signUp || !isLoaded) return null;

    if(isSignedIn) return router.push("/generation");
  
    const signInWith = (strategy: OAuthStrategy) => {
      return signIn.authenticateWithRedirect({
        strategy,
        redirectUrl: `/sso-callback${searchParams.has("referal") ? "?referal=" + searchParams.get("referal") : ""}`,
        redirectUrlComplete: searchParams.get("redirect") || "/generation"
      })
    }
  
    async function handleSignIn(strategy: OAuthStrategy) {
      if (!signIn || !signUp) return null
  
      // If the user has an account in your application, but does not yet
      // have an OAuth account connected to it, you can transfer the OAuth
      // account to the existing user account.
      const userExistsButNeedsToSignIn =
        signUp.verifications.externalAccount.status === 'transferable' &&
        signUp.verifications.externalAccount.error?.code === 'external_account_exists'
  
      if (userExistsButNeedsToSignIn) {
        const res = await signIn.create({ 
            transfer: true
         })
        console.log(res)
  
        if (res.status === 'complete') {
          setActive({
            session: res.createdSessionId,
            beforeEmit: () => router.push(searchParams.get("redirect") || "/generation"),
          })
        }
      }
  
      // If the user has an OAuth account but does not yet
      // have an account in your app, you can create an account
      // for them using the OAuth information.
      const userNeedsToBeCreated = signIn.firstFactorVerification.status === 'transferable'
  
      try {
        if (userNeedsToBeCreated) {
            const res = await signUp.create({
              transfer: true,
              unsafeMetadata: {
                referal: searchParams.has("referal") ? searchParams.get("referal") : ""
              }
            })
      
            if (res.status === 'complete') {
              setActive({
                session: res.createdSessionId,
                beforeEmit: () => router.push(searchParams.get("redirect") || "/generation"),
              })
            }
          } else {
            // If the user has an account in your application
            // and has an OAuth account connected to it, you can sign them in.
            signInWith(strategy)
          }
      } catch(e) {
        console.error(e)
      }
    }

  	async function submit(e: FormEvent) {
        e.preventDefault()
        setExpired(false)
        setVerified(false)
        setSubmitted(true)

        // Start the sign up flow, by collecting
        // the user's email address.
        try {
            await signUp?.create({
                emailAddress,
                unsafeMetadata: {
                    referal: searchParams.has("referal") ? searchParams.get("referal") : ""
                }
            })

            const { startEmailLinkFlow } = signUp!.createEmailLinkFlow()

            const su = await startEmailLinkFlow({
                redirectUrl: process.env.NEXT_PUBLIC_URL + '/verification',
            })

            // Check the verification result.
            const verification = su.verifications.emailAddress
            if (verification.verifiedFromTheSameClient()) {
                setVerified(true)
            } else if (verification.status === 'expired') {
                setExpired(true)
            }
        
            if (su.status === 'complete' && setActive) {
                setActive({
                    session: su.createdSessionId,
                    beforeEmit: () => router.push(searchParams.get("redirect") || "/generation"),
                })
                return
            }
        } catch(e: any) {
            if(e.errors.find((err: any) => err.code === "form_identifier_exists"))
            {
                const si = await signIn?.create({ identifier: emailAddress })
                const supportedFirstFactors = si?.supportedFirstFactors?.find(
                    (ff) => ff.strategy === 'email_link' && ff.safeIdentifier === emailAddress,
                );
                // @ts-expect-error because error in clerk package types 
                const { startEmailLinkFlow } = signIn?.createEmailLinkFlow()

                try {
                    const res = await startEmailLinkFlow({
                        emailAddressId: (supportedFirstFactors as any)?.emailAddressId,
                        redirectUrl: process.env.NEXT_PUBLIC_URL + '/verification',
                    })
                    // Check the verification result.
                    const verification = res.firstFactorVerification
                    if (verification.verifiedFromTheSameClient()) {
                        setVerified(true)
                    } else if (verification.status === 'expired') {
                        setExpired(true)
                    }
                    if (res.status === 'complete' && setActive) {
                        setActive({
                            session: res.createdSessionId,
                            beforeEmit: () => router.push(searchParams.get("redirect") || "/generation"),
                        })
                        return
                    }
                }
                catch(e) {
                    console.error(e)
                }
            }
        }
  	}
    return (
        <div className="login container-login">
            <div className='login__inner'>
                <div className="login__circle"></div>
                {expired && 
                    <div className='login__text login__text--status'>
                        Expired
                    </div>
                }
                {!submitted ? 
                    <>
                        <div className='login__heading'>
                            Choose method to sign in
                        </div>
                        <div className='login__form'>
                            <form onSubmit={submit} className='login__form-inner'>
                                <div className="login__form-input__wrapper">
                                    <input
                                        className="login__form-input"
                                        placeholder="Your e-mail"
                                        onChange={(e) => setEmailAddress(e.target.value)}
                                        value={emailAddress}
                                        type='email'
                                        disabled={submitted}
                                        required
                                    />
                                    {!emailAddress ? 
                                        <div className="icon login__form-input__icon">
                                            <LetterIcon />
                                        </div> :
                                        <div
                                            className="icon login__form-input__icon"
                                            onClick={() => setEmailAddress("")}
                                        >
                                            <CloseCircleIcon />
                                        </div>
                                    }
                                </div>
                                <Button disableIcons size='s' color={submitted || !emailAddress ? "gray" : "green1"} className="login__form-button" disabled={submitted || !emailAddress}>
                                    Log In with Email
                                </Button>
                            </form>
                        </div>
                        <hr className='login__hr'></hr>
                        <div className='login__buttons'>
                            <button className="login__buttons-item" onClick={() => {
                                handleSignIn("oauth_google")
                            }}>
                                <div className="icon login__buttons-icon">
                                    <GoogleLogo />
                                </div>
                                <div className="login__buttons-text">
                                    Google
                                </div>
                            </button>
                            {/* <button className="login__buttons-item login__buttons-item--blue" onClick={() => {
                                handleSignIn("oauth_discord")
                            }}>
                                <div className="icon login__buttons-icon">
                                    <DiscordLogo />
                                </div>
                                <div className="login__buttons-text">
                                    Discord
                                </div>
                            </button>
                            <button className="login__buttons-item" onClick={() => {
                                handleSignIn("oauth_discord")
                            }}>
                                <div className="icon login__buttons-icon">
                                    <FacebookLogo />
                                </div>
                                <div className="login__buttons-text">
                                    Facebook
                                </div>
                            </button> */}
                        </div>
                    </> :
                    <>
                        <div className="login__main">
                            <div className="login__heading">
                                Please, confirm your mail
                            </div>
                            <div className="login__text">
                                <p>
                                    We now sent you a confirmation letter. To log in, please find it and click on the link inside.
                                </p>
                            </div>
                        </div>
                        
                        <hr className='login__hr login__hr--notext'></hr>
                        <div className='login__buttons' style={{ gap: 10 }}>
                            <Link className="login__buttons-item" href="https://gmail.com" target='_blank'>
                                <div className="icon login__buttons-icon">
                                    <GoogleLogo />
                                </div>
                                <div className="login__buttons-text">
                                    Open Gmail
                                </div>
                            </Link>
                            <Link className="login__buttons-item login__buttons-item--skyblue" href="https://outlook.office.com" target='_blank'>
                                <div className="icon login__buttons-icon">
                                    <OutlookLogo />
                                </div>
                                <div className="login__buttons-text">
                                    Open Outlook
                                </div>                        
                            </Link>
                            <Link className="login__buttons-item login__buttons-item--purple" href="https://mail.yahoo.com/" target='_blank'>
                                <div className="icon login__buttons-icon">
                                    <YahooLogo />
                                </div>
                                <div className="login__buttons-text">
                                    Open Yahoo
                                </div>                         
                            </Link>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default LoginPage