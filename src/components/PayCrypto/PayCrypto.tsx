"use client";

import React, { useState } from 'react'
import "./PayCrypto.scss"
import Image from 'next/image';
import { message, QRCode, Select } from 'antd';
import Button from '../UI/primitives/Button/Button';


import LogoImage from "../../../public/Images/Logo.png"
import CryptoIcon from "../../../public/Images/Buy/CryptoIcon.png";
import { ArrowExpandIcon, ClockIcon, Copy2Icon, CopyIcon, InfoIcon } from '../UI/svg';
import {IPostApiCreateAddressCurrencyEnum} from "@/shared/services/TunnelServiceApi";
import {getTunnelAddress} from "@/shared/actions/getTunnelAddress";

interface PayCryptoProps {
    amount: number;

}

enum CryptoType {
    TRON = "TRC-20",
    ETH = "ERC-20"
}

const PayCrypto = ({ amount }: PayCryptoProps) => {
    const [type, setType] = useState<IPostApiCreateAddressCurrencyEnum>(IPostApiCreateAddressCurrencyEnum.USDTTRC20);
    const [isReady, setIsReady] = useState<boolean>(false);
    const [address, setAddress] = useState<string>()

    const handleCopyAddress = () => {
        navigator.clipboard.writeText(address!)
        message.success("Address was copied")
    }

    const handleStartPayment = async (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        try {
            const data = await getTunnelAddress(type)
            data && setAddress(data.address)
        } catch (error) {
            message.error("Что-то пошло не так")
        }
    }


    return (
        <div className='pay-crypto'>
            <section className="pay-crypto-info">
                <Image 
                    alt="Logo"
                    src={LogoImage}
                    width={120}
                    height={35}
                    className='pay-crypto-info__logo'
                />
                <div className="pay-crypto-info__amount">{amount} USDT</div>
                <div className="pay-crypto-info__details">
                    <div className="pay-crypto-info__details-item">USDT</div>
                    <div className="pay-crypto-info__details-delimiter">·</div>
                    <div className="pay-crypto-info__details-item">{type}</div>
                </div>
                <div className="pay-crypto-info__warning">
                    <div className="icon">
                        <InfoIcon />
                    </div>
                    <p>
                        Please make sure the currency, network and address are
                        correct or the funds sent may be lost.
                    </p>
                </div>
            </section>
            {/* <Select options={[{ value: 'sample', label: <span>sample</span> }]} />; */}
            {!address ?
                <section className="pay-crypto-select">
                    <div className="pay-crypto-select__list">
                        <Select
                            value={[
                                { 
                                    value: 'USDT', 
                                    label: <span className='pay-crypto-select__label'>
                                        <Image
                                            alt=""
                                            width={20}
                                            height={20}
                                            src={CryptoIcon}
                                        />
                                        USDT
                                    </span>
                                }
                            ]}
                            open={false}
                            variant='borderless'
                            className='pay-crypto-select__select'
                            popupClassName='pay-crypto-select__popup'
                        />
                        <Select
                            options={[
                                { value: IPostApiCreateAddressCurrencyEnum.USDTTRC20, label: <span>TRON (TRC-20)</span> },
                                { value: IPostApiCreateAddressCurrencyEnum.USDTERC20, label: <span>ETH (ERC-20)</span> }
                            ]} 
                            className='pay-crypto-select__select'
                            popupClassName='pay-crypto-select__popup'
                            variant='borderless'
                            value={type}
                            onSelect={(value) => setType(value)}
                            suffixIcon={<ArrowExpandIcon />}
                            defaultActiveFirstOption={true}
                        />
                    </div>
                    <Button disabled={!type} onClick={handleStartPayment}>Go to payment</Button>
                </section> :
                <section className="pay-crypto-action">
                    <div className="pay-crypto-action__address">
                        <QRCode 
                            value={address}
                            className='pay-crypto-action__address-qr'
                            bordered={false}
                            size={120}
                        />
                        <div className="pay-crypto-action__address-description">
                            Recipient&apos;s wallet address
                        </div>
                        <div className="pay-crypto-action__address-value">
                            {address}
                        </div>
                        <button onClick={() => handleCopyAddress()} className="pay-crypto-action__address-button">
                            <div className="icon">
                                <Copy2Icon />
                            </div>
                            Copy wallet address
                        </button>
                        <div className="pay-crypto-action__address-checkbox">
                            <input type="checkbox" id='checkbox__send' />
                            <label htmlFor="checkbox__send">
                                Send a notification by mail when the payment status changes
                            </label>
                        </div>
                    </div>
                    <div className="pay-crypto-action__footer">
                        <div className="icon">
                            <ClockIcon />
                        </div>
                        Estimated time 1 min
                    </div>
                </section>
            }
        </div>
    )
}

export default PayCrypto