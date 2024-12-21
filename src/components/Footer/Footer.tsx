"use client";

import { Link } from '@/i18n/routing'
import React from 'react'
import { ArrowRightIcon, FacebookIcon, InIcon, InstagramIcon, PinterestIcon, XIcon, YoutubeIcon } from '../UI/svg'
import Image from 'next/image'

import AppleIconImage from '../../../public/Icons/AppleIcon.png'
import AndroidIconImage from '../../../public/Icons/AndroidIcon.png'

import MastercardIconImage from '../../../public/Icons/MastercardIcon.png'
import MirIconImage from '../../../public/Icons/MirIcon.png'
import QiwiIconImage from '../../../public/Icons/QiwiIcon.png'
import VisaIconImage from '../../../public/Icons/VisaIcon.png'
import YoomoneyIconImage from '../../../public/Icons/YoomoneyIcon.png'
import { useModal } from '@/shared/hooks/useModal'
import ModalSupport from '../ModalSupport/ModalSupport'
import SocialsList from '../SocialsList/SocialsList';
import LanguageSelector from "@/components/LanguageSelector/LanguageSelector";

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
    noButtons?: boolean;
    variant?: "default" | "layout-right";
}

function Footer({ variant = "default", ...props }: FooterProps) {
    const { openModal } = useModal()
    return (
        <footer {...props} className={`footer ${props.className ?? ""}`}>
            <hr className='footer__hr'></hr>
            <ul className="footer__list">
                <li className="footer__list-item">
                    <Link href="/privacy-policy" className="footer__list-link">
                        Privacy Policy
                        <div className="icon footer__list-icon">
                            <ArrowRightIcon />
                        </div>
                    </Link>
                </li>
                <li className="footer__list-item">
                    <Link href="/terms-of-service" className="footer__list-link">
                        Terms of Service
                        <div className="icon footer__list-icon">
                            <ArrowRightIcon />
                        </div>
                    </Link>
                </li>
                <li className="footer__list-item">
                    <Link href="/acceptable-use-policy" className="footer__list-link">
                        Acceptable Use Policy
                        <div className="icon footer__list-icon">
                            <ArrowRightIcon />
                        </div>
                    </Link>
                </li>
                <li className="footer__list-item">
                    <Link href="/refund-and-cancellation" className="footer__list-link">
                        Refund & Cancellation Policy
                        <div className="icon footer__list-icon">
                            <ArrowRightIcon />
                        </div>
                    </Link>
                </li>
                <li className="footer__list-item">
                    <Link href="/referral-program" className="footer__list-link">
                        Referal program
                        <div className="icon footer__list-icon">
                            <ArrowRightIcon />
                        </div>
                    </Link>
                </li>
                <li className="footer__list-item">
                    <Link href="/blog" className="footer__list-link">
                        Blog
                        <div className="icon footer__list-icon">
                            <ArrowRightIcon />
                        </div>
                    </Link>
                </li>
                <li className="footer__list-item">
                    <Link href="/gallery" className="footer__list-link">
                        Gallery
                        <div className="icon footer__list-icon">
                            <ArrowRightIcon />
                        </div>
                    </Link>
                </li>
                <li className="footer__list-item">
                    <Link href={"/support"} className="footer__list-link">
                        Support by AI Deep Nude
                        <div className="icon footer__list-icon">
                            <ArrowRightIcon />
                        </div>
                    </Link>
                </li>
            </ul>
            <SocialsList className={variant === "default" ? "visible-tablet"  : ""} />
            {!props.noButtons && 
                <div className={`footer__buttons footer__row footer__row--${variant}`}>
                    <Link href="/ios" className="footer__buttons-item">
                        <Image 
                            src={AppleIconImage}
                            alt="AppleIcon"
                            className='footer__buttons-icon'
                            width={64}
                            height={64}
                        />
                        Apple IOS
                    </Link>
                    <Link href="/android" className="footer__buttons-item">
                        <Image 
                            src={AndroidIconImage}
                            alt="AndroidIcon"
                            className='footer__buttons-icon'
                            width={64}
                            height={64}
                        />
                        Android
                    </Link>
                </div>
            }
            <div className={`footer__row footer__row--${variant} footer__row--tablet-reverse`}>
                <div className="footer__info">
                    <p>
                        We do not store any data. We do not take any responsibility for images <br></br> created using the site. The images created are art. The person in the picture or photograph must not be under 18 years of age.
                    </p>
                </div>
                <LanguageSelector variant={"footer"} />
            </div>
            <div className={`footer__row footer__row--${variant} footer__row--gap-20`}>
                <div className="footer__payments">
                    <div className="footer__payments-title">
                        We accept payment
                    </div>
                    <ul className="footer__payments-list">
                    <li className="footer__payments-item">
                            <Image 
                                src={MastercardIconImage}
                                alt="Mastercard"
                                className='footer__payments-icon'
                                width={50}
                                height={30}
                            />
                        </li>
                        <li className="footer__payments-item">
                            <Image 
                                src={VisaIconImage}
                                alt="Visa"
                                className='footer__payments-ico'
                                width={50}
                                height={30}
                            />
                        </li>
                        {/* <li className="footer__payments-item">
                            <Image 
                                src={MirIconImage}
                                alt="Mir Pay"
                                className='footer__payments-ico'
                                width={50}
                                height={30}
                            />
                        </li>
                        <li className="footer__payments-item">
                            <Image 
                                src={QiwiIconImage}
                                alt="Qiwi"
                                className='footer__payments-ico'
                                width={50}
                                height={30}
                            />
                        </li>
                        <li className="footer__payments-item">
                            <Image 
                                src={YoomoneyIconImage}
                                alt="YooMoney"
                                className='footer__payments-ico'
                                width={50}
                                height={30}
                            />
                        </li> */}
                    </ul>
                </div>
                <SocialsList className={variant === "default" ? "hidden-tablet" : "hidden"} />
            </div>
        </footer>
    )
}

export default Footer