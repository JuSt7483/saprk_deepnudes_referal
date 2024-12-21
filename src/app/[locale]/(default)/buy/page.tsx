"use client";

import Heading from '@/components/UI/primitives/Heading/Heading'
import React, { useEffect, useState } from 'react'
import "./style.scss"
import { formatSecondsToTime } from '@/shared/utils/formatSecondsToTime';
import BackgroundVideo from 'next-video/background-video';

import girlVideoMuted from '/videos/girl-muted.mp4';
import Button from '@/components/UI/primitives/Button/Button';
import Image from 'next/image';

import FireEmoji from "../../../../../public/Images/Buy/FireEmoji.png";
import HeartsEmoji from "../../../../../public/Images/Buy/HeartsEmoji.png";
import KissEmoji from "../../../../../public/Images/Buy/HeartsEmoji.png";
import PeachEmoji from "../../../../../public/Images/Buy/PeachEmoji.png";
import StarsEmoji from "../../../../../public/Images/Buy/StarsEmoji.png";
import VoltageEmoji from "../../../../../public/Images/Buy/VoltageEmoji.png";
import CryptoIcon from "../../../../../public/Images/Buy/CryptoIcon.png";

import { GreenMarkIcon, MastercardIcon, VisaIcon } from '@/components/UI/svg';
import { Link, useRouter } from '@/i18n/routing';
import { getStrapiData } from '@/shared/actions/getStrapiData';
import { useFormatter, useLocale } from 'next-intl';
import { PayMethod } from '@/shared/enums/PayMethod';

const BuyPage = () => {
    const [offerTimer, setOfferTimer] = useState<number>(60 * 25);
    const [tariffsData, setTariffsData] = useState<any[]>();
    const [selectedIndex, setSelectedIndex] = useState<number>(1);
    const locale = useLocale();
    const format = useFormatter();
    const router = useRouter();

    useEffect(() => {

        const interval = setInterval(() => {
            if(offerTimer > 0)
            {
                setOfferTimer((prev) => prev - 1)
            }
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    useEffect(() => {
        if(locale)
        {
            const fetchData = async () => {
                try {
                    const tariff = await getStrapiData(`/api/tariffs?sort[0]=order:asc&populate=*&locale=${locale}`)
                    
                    setTariffsData(tariff.data)
                    console.log(tariff)
                } catch(e) {
                    console.error(e)
                }
            }
            fetchData()
        }
    }, [locale])

    return (
        <div className="buy-page">
            <Heading breadcrump={[{ href: "/buy", title: "Plans" }]}>Buy plan</Heading>
            <div className="buy-page-offer">
                <div className="buy-page-offer__text">
                    Up to 50% off just for you!
                </div>
                <div className="buy-page-offer__timer">
                    {formatSecondsToTime(offerTimer)}
                </div>
            </div>
            <BackgroundVideo src={girlVideoMuted}>
                <div className="buy-page-main">
                    <ul className="buy-page-main__selector">
                        {tariffsData?.map((tariff: any, index) => (
                            <li key={index} onClick={() => setSelectedIndex(index)} className={`buy-page-main__selector-item ${selectedIndex === index && "buy-page-main__selector-item--active"}`}>
                                {tariff.title}
                            </li>
                        ))}
                    </ul>
                    <div className="buy-page-main__info">
                        <div className="buy-page-main__info-part">
                            <ul className="buy-page-main__badge">
                                {
                                    tariffsData && tariffsData[selectedIndex].discountPercent > 0 &&
                                    <li className="buy-page-main__badge-item">
                                        {tariffsData[selectedIndex].discountPercent}% OFF
                                    </li>
                                }
                                {
                                    tariffsData && tariffsData[selectedIndex].isPopular &&
                                    <li className="buy-page-main__badge-item">
                                        Popular
                                    </li>
                                }
                            </ul>
                        </div>
                        <div className="buy-page-main__info-part">
                            <div className="buy-page-main__price">
                                <div className="buy-page-main__price-old">
                                    {tariffsData ? format.number(tariffsData[selectedIndex].price, {style: 'currency', currency: tariffsData[selectedIndex].currency}) : -1}
                                </div>
                                <div className="buy-page-main__price-actual">
                                    {tariffsData ? format.number(tariffsData[selectedIndex].price * (100 - tariffsData[selectedIndex].discountPercent) / 100 , {style: 'currency', currency: tariffsData[selectedIndex].currency}) : -1}
                                </div>
                            </div>
                            {/* <div className="buy-page-main__price-total">
                                Total: €127.11
                            </div> */}
                        </div>
                    </div>
                </div>
            </BackgroundVideo>
            <div className="buy-page-buttons">
                <Button
                    className='buy-page-buttons__item'
                    variant='secondary'
                    color='white'
                    iconLeft={
                        <div className='buy-page-buttons__icons'>
                            <div className="icon">
                                <VisaIcon />
                            </div>
                            <div className="icon">
                                <MastercardIcon />
                            </div>
                        </div>
                    }
                    onClick={() => router.push(`/pay/${tariffsData ? tariffsData[selectedIndex].documentId : null}/${PayMethod.BANKCARD}`)}>
                    Cards
                </Button>
                <Button
                    className='buy-page-buttons__item'
                    variant='secondary'
                    color='white'
                    iconLeft={
                    <div className='buy-page-buttons__icons'>
                        <div className="icon">
                            <Image
                                alt=""
                                width={20}
                                height={20}
                                src={CryptoIcon}
                            />
                        </div>
                    </div>
                }
                onClick={() => router.push(`/pay/${tariffsData ? tariffsData[selectedIndex].documentId : null}/${PayMethod.CRYPTO}`)}
                >
                    Crypto
                </Button>
            </div>
            <div className="buy-page-features">
                <h4 className='buy-page-features__heading'>
                    What&apos;s included
                </h4>
                <div className="buy-page-features__row">
                    <ul className="buy-page-features__grid">
                        <li className="buy-page-features__grid-item">
                            <Image
                                alt=""
                                width={24}
                                height={24}
                                className='buy-page-features__grid-image'
                                src={StarsEmoji}
                            />
                            Top quality
                        </li>
                        <li className="buy-page-features__grid-item">
                            <Image
                                alt=""
                                width={24}
                                height={24}
                                className='buy-page-features__grid-image'
                                src={PeachEmoji}
                            />
                            Undress
                        </li>
                        <li className="buy-page-features__grid-item">
                            <Image
                                alt=""
                                width={24}
                                height={24}
                                className='buy-page-features__grid-image'
                                src={FireEmoji}
                            />
                            Sex poses
                        </li>
                        <li className="buy-page-features__grid-item">
                            <Image
                                alt=""
                                width={24}
                                height={24}
                                className='buy-page-features__grid-image'
                                src={KissEmoji}
                            />
                            All features
                        </li>
                        <li className="buy-page-features__grid-item">
                            <Image
                                alt=""
                                width={24}
                                height={24}
                                className='buy-page-features__grid-image'
                                src={HeartsEmoji}
                            />
                            No watermarks
                        </li>
                        <li className="buy-page-features__grid-item">
                            <Image
                                alt=""
                                width={24}
                                height={24}
                                className='buy-page-features__grid-image'
                                src={VoltageEmoji}
                            />
                            No queue
                        </li>
                    </ul>
                    <ul className="buy-page-features__list">
                        <li className="buy-page-features__list-item">
                            <div className="icon">
                                <GreenMarkIcon />
                            </div>
                            No adult transaction in your bank statement
                        </li>
                        <li className="buy-page-features__list-item">
                            <div className="icon">
                                <GreenMarkIcon />
                            </div>
                            One-time payment
                        </li>
                        <li className="buy-page-features__list-item">
                            <div className="icon">
                                <GreenMarkIcon />
                            </div>
                            Fully anonymous
                        </li>
                    </ul>
                </div>
            </div>
            <Link href={"/crypto"} className='buy-page-link'>
                How to Easily Checkout with Crypto
                <div className="buy-page-link__underline"></div>
            </Link>
        </div>
    )
}

export default BuyPage