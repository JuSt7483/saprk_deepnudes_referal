'use client';

import React, { useState } from 'react'
import { useTranslations } from 'next-intl';
import Button from '../UI/primitives/Button/Button';

import "./AccountConvert.scss"
import { ArrowRightIcon, BigArrowRightIcon, Diamond14Icon, Diamond32Icon, DiamondFilledIcon, DollarBackground16Icon, DollarBackgroundIcon } from '../UI/svg';

interface AccountConvertProps {
    balance?: number;
    lose?: number;
}

const AccountConvert = ({ balance = 10 } : AccountConvertProps) => {
    // const [coins, setCoins] = useState<number>(balance);
    // const t = useTranslations("AccountConvert");

    // const handleUpdateCoins = (value: 1 | -1) => {
    //     let newCoins = coins + value;

    //     if(newCoins <= balance && newCoins >= 0)
    //     {
    //         setCoins(newCoins)
    //     }
    // }

    return (
        <div className="account-convert">
            <div className="account-convert__heading">
                Convert your referal earnings:
            </div>
            <div className="account-convert__main">
                <div className="account-convert__main-arrow">
                    <div className="icon">
                        <BigArrowRightIcon />
                    </div>
                </div>
                <div className="account-convert__main-part">
                    <div className="account-convert__main-text">
                        <div className="account-convert__main-row account-convert__main-row--color-white">
                            <div className="icon">
                                <DollarBackgroundIcon />
                            </div>
                            Your money:
                        </div>
                        <div className="account-convert__main-row">
                            You have: {balance}$
                        </div>
                    </div>
                    <div className="account-convert__main-value">
                        ${balance}
                    </div>
                </div>
                <div className="account-convert__main-part">
                    <div className="account-convert__main-text">
                        <div className="account-convert__main-row account-convert__main-row--color-white">
                            <div className="icon account-convert__main-icon">
                                <Diamond14Icon />
                            </div>
                            Your coins:
                        </div>
                        <div className="account-convert__main-row">
                            You have: {balance} coins
                        </div>
                    </div>
                    <div className="account-convert__main-value">
                        +{balance}
                        <div className="icon">
                            <Diamond32Icon />
                        </div>
                    </div>
                </div>
            </div>
            <div className="account-convert__course">
                <span className="account-convert__course-text">
                    Course exchange:
                </span>
                <span className="account-convert__course-equation">
                    <span className="account-convert__course-number">
                        1
                    </span>
                    <span className="account-convert__course-icon">
                        <DiamondFilledIcon />
                    </span>
                    <span className="account-convert__course-symbol">
                        =
                    </span>
                    <span className="account-convert__course-number">
                        1
                    </span>
                    <span className="account-convert__course-icon">
                        <DollarBackground16Icon />
                    </span>
                </span>
            </div>
            <div className="account-convert__button-wrapper">
                <Button disabled={balance === 0}>
                    Convert to coins
                </Button>
            </div>
            <div className="account-convert__withdraw-wrapper">
                <Button color='white' disabled={balance === 0}>
                    Withdraw funds
                </Button>
            </div>
        </div>
    )
}

export default AccountConvert