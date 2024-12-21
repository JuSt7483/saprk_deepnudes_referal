"use client";

import React from 'react'
import "./BannerImprove.scss"

import { useTranslations } from 'next-intl'

import GirlImage from "../../../public/Images/BannerImprove/Girl.png"
import Image from 'next/image'
import ModalInstruction from "@/components/ModalInstruction/ModalInstruction";
import {useModal} from "@/shared/hooks/useModal";

const BannerImprove = () => {
    const t = useTranslations();
    const { openModal } = useModal()

    return (
        <div className='improve' onClick={() => openModal(<ModalInstruction />)}>
            <div className="improve__heading">
                How to improve<br></br>the result
            </div>

            <div className="improve__star improve__star--1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M17.1694 0.972044C16.7902 7.02488 19.0743 12.9413 23.4224 17.1691C17.3696 16.79 11.4532 19.0741 7.2253 23.4222C7.60446 17.3693 5.32038 11.4529 0.972292 7.22505C7.02513 7.60421 12.9415 5.32014 17.1694 0.972044Z" fill="#323232"/>
                </svg>
            </div>

            <div className="improve__star improve__star--2">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M3.76636 0.277545C5.17516 2.26681 7.38271 3.54134 9.80986 3.76676C7.8206 5.17556 6.54607 7.38311 6.32065 9.81027C4.91185 7.821 2.7043 6.54647 0.277143 6.32105C2.26641 4.91225 3.54094 2.7047 3.76636 0.277545Z" fill="#323232"/>
                </svg>
            </div>

            <Image 
                alt=""
                src={GirlImage}
                width={154}
                height={224}
                className='improve__image'
            />
        </div>
    )
}

export default BannerImprove