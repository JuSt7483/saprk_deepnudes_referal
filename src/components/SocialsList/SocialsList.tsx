import Link from 'next/link'
import React from 'react'
import { PinterestIcon, InIcon, FacebookIcon, XIcon, InstagramIcon, YoutubeIcon } from '../UI/svg'
import "./SocialsList.scss"

const SocialsList = ({ className }: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <ul className={`socials ${className ?? ""}`}>
            <li className="socials-item">
                <Link href="" className='icon socials-link'>
                    <PinterestIcon />
                </Link>
            </li>
            <li className="socials-item">
                <Link href="" className='icon socials-link'>
                    <InIcon />
                </Link>
            </li>
            <li className="socials-item">
                <Link href="" className='icon socials-link'>
                    <FacebookIcon />
                </Link>
            </li>
            <li className="socials-item">
                <Link href="" className='icon socials-link'>
                    <XIcon />
                </Link>
            </li>
            <li className="socials-item">
                <Link href="" className='icon socials-link'>
                    <InstagramIcon />
                </Link>
            </li>
            <li className="socials-item">
                <Link href="" className='icon socials-link'>
                    <YoutubeIcon />
                </Link>
            </li>
        </ul>
    )
}

export default SocialsList