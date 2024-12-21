import React from 'react'
import "./BannerDiscount.scss"
import Button from '../UI/primitives/Button/Button'

import PercentsImage from "../../../public/Images/BannerDiscount/50percent.png"
import HatImage from "../../../public/Images/BannerDiscount/hat.png"
import Tree1Image from "../../../public/Images/BannerDiscount/tree1.png"
import Tree2Image from "../../../public/Images/BannerDiscount/tree2.png"
import Tree3Image from "../../../public/Images/BannerDiscount/tree3.png"
import Image from 'next/image'

interface BannerDiscountProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "small"
}

const BannerDiscount = ({ variant = "default", className }: BannerDiscountProps) => {
    if(variant === "default")
        return (
            <div className={`discount ${className ?? ""}`}>
                <div className="discount__heading">
                    Up to 50% discount
                </div>
                <div className="discount__description">
                    <p>
                        Exclusive discount<br></br>for VIP coins up to 60!
                    </p>
                </div>
                <Button color='white' className='discount__button'>Top up balance</Button>

                <Image
                    alt=""
                    src={PercentsImage}
                    width={148}
                    height={96}
                    className='discount__image'
                />


                <Image
                    alt=""
                    src={Tree1Image}
                    width={419}
                    height={120}
                    className='discount__tree discount__tree--1'
                />

                <Image
                    alt=""
                    src={Tree2Image}
                    width={271}
                    height={156}
                    className='discount__tree discount__tree--2'
                />

                <Image
                    alt=""
                    src={HatImage}
                    width={129}
                    height={91}
                    className='discount__hat'
                />


                <div className="discount__path">
                    <svg xmlns="http://www.w3.org/2000/svg" width="364" height="188" viewBox="0 0 364 188" fill="none">
                        <path d="M-8.49971 -89C-14.9266 -74.5104 224.045 11.8781 266 129.5C326.117 298.04 304.5 87 280.312 3.68785C272.235 -24.1324 358.001 48 401.001 196" stroke="url(#paint0_linear_747_1193)" strokeWidth="42.0666"/>
                        <defs>
                            <linearGradient id="paint0_linear_747_1193" x1="328.25" y1="-108.75" x2="190.25" y2="223.75" gradientUnits="userSpaceOnUse">
                            <stop offset="0.178726" stop-color="#11A725"/>
                            <stop offset="0.265749" stop-color="#17BB2D"/>
                            <stop offset="1" stop-color="#FDFC47"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                <div className="discount__circle"></div>
            </div>
        )
    else if(variant === "small")
        return (
            <div className={`discount discount--small ${className ?? ""}`}>
                <div className="discount__heading discount__heading--small">
                    Up to 50% discount
                </div>
                <Button href={"/buy"} variant="small" color='white' className='discount__button discount__button--small'>Buy</Button>

                <Image
                    alt=""
                    src={Tree3Image}
                    width={175}
                    height={100}
                    className='discount__tree discount__tree--3'
                />

                <Image
                    alt=""
                    src={PercentsImage}
                    width={79}
                    height={52}
                    className='discount__image discount__image--small'
                />

                <div className="discount__path">
                    <svg xmlns="http://www.w3.org/2000/svg" width="364" height="188" viewBox="0 0 364 188" fill="none">
                        <path d="M-8.49971 -89C-14.9266 -74.5104 224.045 11.8781 266 129.5C326.117 298.04 304.5 87 280.312 3.68785C272.235 -24.1324 358.001 48 401.001 196" stroke="url(#paint0_linear_747_1193)" strokeWidth="42.0666"/>
                        <defs>
                            <linearGradient id="paint0_linear_747_1193" x1="328.25" y1="-108.75" x2="190.25" y2="223.75" gradientUnits="userSpaceOnUse">
                                <stop offset="0.178726" stop-color="#11A725"/>
                                <stop offset="0.265749" stop-color="#17BB2D"/>
                                <stop offset="1" stop-color="#FDFC47"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                <div className="discount__circle"></div>
            </div>
        )
}

export default BannerDiscount