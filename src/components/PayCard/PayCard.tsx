"use client";

import React, { useState } from 'react'
import "./PayCard.scss"
import "./Payer.css"
import Image from 'next/image';
import { message, QRCode, Select } from 'antd';
import Button from '../UI/primitives/Button/Button';


import LogoImage from "../../../public/Images/Logo.png"
import MastercardImage from "../../../public/Images/Pay/Mastercard.png"
import PciImage from "../../../public/Images/Pay/PCI.png"
import SecureImage from "../../../public/Images/Pay/Secure.png"
import VisaImage from "../../../public/Images/Pay/Visa.png"
import { ArrowExpandIcon, ClockIcon, Copy2Icon, CopyIcon, InfoIcon } from '../UI/svg';

interface PayCardProps {
    amount: number;

}

const PayCard = ({ amount }: PayCardProps) => {
    return (
        <div className='pay-card'>
            <section className="pay-card-main">
                <Image 
                    alt="Logo"
                    src={LogoImage}
                    width={120}
                    height={35}
                    className='pay-card-main__logo'
                />
                <div className="pay-card-main__amount">{amount} USDT</div>
                <div className="data">
                    <div className="group">
                        <input
                        required
                        id="payer_card"
                        className="payer_card"
                        inputMode="numeric"
                        type="text"
                        maxLength={16}
                        placeholder="Card number"
                        pattern="\d{16}"
                        />
                        <img className="icon-card-type" />
                        <div id="payer_card-error" className="error">Invalid Card Number</div>
                    </div>
                    <div className="details">
                        <input
                        required
                        type="tel"
                        className="payer_card"
                        id="payer_expiryDate"
                        placeholder="MM/YY"
                        maxLength={5}
                        pattern="^\d{2}\/\d{2}$"
                        />
                        <div id="payer_expiryDate-error" className="error">
                        Invalid Card Expiry Date
                        </div>
                    </div>
                    <div className="details">
                        <input
                        required
                        id="payer_cvv"
                        placeholder="CVV"
                        type="password"
                        className="payer_card"
                        autoComplete="new-password"
                        maxLength={3}
                        pattern="\d{3}"
                        />
                        <div id="payer_cvv-error" className="error">Invalid Card CVV</div>
                    </div>
                    <div className="group">
                        <input
                        required
                        id="payer_name"
                        className="payer_card"
                        aria-label="Full Name"
                        placeholder="Name on card"
                        type="text"
                        minLength={3}
                        maxLength={22}
                        pattern="[A-Za-z\- ]+"
                        />
                        <div id="payer_name-error" className="error">Invalid name</div>
                    </div>
                </div>

                <div id="card-tokens-section" className="hidden">
                    <p className="card-tokens-title">Card tokens</p>
                    <div className="card-tokens"></div>
                    <button id="clear" type="button">Clear token</button>
                </div>
            </section>
            <section className="pay-card-action">
                <Button>Pay now</Button>
                <div className="pay-card-action__warning">
                    No adult transaction in your bank statement. <br/>
                    No further charges will be applied.
                </div>
                <div className="pay-card-action__list">
                    <Image
                        alt=""
                        src={VisaImage}
                        height={32}
                        width={0}
                        className='pay-card-action__list-image'
                    />
                    <Image
                        alt=""
                        src={MastercardImage}
                        height={32}
                        width={0}
                        className='pay-card-action__list-image'
                    />
                    <Image
                        alt=""
                        src={PciImage}
                        height={32}
                        width={0}
                        className='pay-card-action__list-image'
                    />
                    <Image
                        alt=""
                        src={SecureImage}
                        height={32}
                        width={0}
                        className='pay-card-action__list-image'
                    />
                </div>
            </section>
        </div>
    )
}

export default PayCard