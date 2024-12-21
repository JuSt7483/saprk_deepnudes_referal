import React from 'react'
import "./BannerInvite.scss"
import Button from '../UI/primitives/Button/Button'
import { useTranslations } from 'next-intl'
import { UserPlusIcon } from '../UI/svg'

const BannerInvite = () => {
    const t = useTranslations();
    return (
        <div className='invite'>
            <div className="invite__heading">
                INVITE FRIENDS AND EARN MONEY INTO YOUR ACCOUNT!
            </div>
            <Button iconLeft={<UserPlusIcon />} className='invite__button'>{t('HomePage.referal.button')}</Button>

            <div className="invite__path">
                <svg xmlns="http://www.w3.org/2000/svg" width="332" height="188" viewBox="0 0 332 188" fill="none">
                <path opacity="0.1" d="M26.6309 301.601C11.9883 290.931 79.7251 177.672 182.34 78.4524C310.609 -45.5725 260.175 113.095 292.904 108.078C325.634 103.062 385.721 -8.43321 395.782 -104.001" stroke="url(#paint0_linear_747_1204)" strokeWidth="48.0824"/>
                <defs>
                    <linearGradient id="paint0_linear_747_1204" x1="437.454" y1="-31.8236" x2="-15.3287" y2="229.591" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#D9D9D9"/>
                    <stop offset="1" stop-color="#0F0F0F"/>
                    </linearGradient>
                </defs>
                </svg>
            </div>

            <div className="invite__circle"></div>
        </div>
    )
}

export default BannerInvite