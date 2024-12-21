"use client";

import React from 'react'
import { useClerk } from '@clerk/nextjs'
import { useTranslations } from 'next-intl';

import { isEmailLinkError, EmailLinkErrorCode } from '@clerk/nextjs/errors';

export default function VerificationStatus() {
  const [verificationStatus, setVerificationStatus] = React.useState('loading')
  const t = useTranslations("VerificationStatus");
  const { handleEmailLinkVerification } = useClerk()

  React.useEffect(() => {
    async function verify() {
      try {
        await handleEmailLinkVerification({
          redirectUrlComplete: "/generation"
        })
        // If we're not redirected at this point, it means
        // that the flow has completed on another device.
        setVerificationStatus('verified')
      } catch (err: any) {
        // Verification has failed.
        let status = 'failed'
        if (isEmailLinkError(err) && err.code === EmailLinkErrorCode.Expired) {
          status = 'expired'
        }
        setVerificationStatus(status)
      }
    }
    verify()
  }, [])

  if (verificationStatus === 'loading') {
    return <>{t('loading')}</>
  }

  if (verificationStatus === 'failed') {
    return <>{t('failed')}</>
  }

  if (verificationStatus === 'expired') {
    return <>{t('expired')}</>
  }

  return <>{t('success')}</>
}