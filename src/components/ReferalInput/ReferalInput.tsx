'use client';

import React, { useState } from 'react'
import { Dropdown, MenuProps, message } from 'antd';
import { Link } from '@/i18n/routing';import { useLocale, useTranslations } from 'next-intl';
import { LogoPinterest, LogoTelegram, LogoInstagramFilled, LogoX, CopyIcon, ShareIcon } from '../UI/svg';

import "./ReferalInput.scss"

interface ReferalInputProps {
    id: string;
}

const ReferalInput = ({ id }: ReferalInputProps) => {
    const locale = useLocale()
    const referal: string = `${process.env.NEXT_PUBLIC_URL}/${locale}/referal/${id}`;
    const [messageApi, contextHolder] = message.useMessage();
    const t = useTranslations();

    const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <Link target="_blank" rel="noopener noreferrer" href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(referal)}`} className='referal-input__link'>
                <span className="referal-input__link__icon">
                    <LogoPinterest />
                </span>
                <span className="referal-input__link__title">
                    Pinterest
                </span>
            </Link>
        ),
    },
    {
        key: '2',
        label: (
            <Link target="_blank" rel="noopener noreferrer" href={`https://x.com/intent/tweet?url=${encodeURIComponent(referal)}`} className='referal-input__link'>
                <span className="referal-input__link__icon">
                    <LogoX />
                </span>
                <span className="referal-input__link__title">
                    Twitter (X)
                </span>
            </Link>
        ),
    },
    {
        key: '3',
        label: (
            <Link target="_blank" rel="noopener noreferrer" href={`https://t.me/share/url?url=${encodeURIComponent(referal)}`} className='referal-input__link'>
                <span className="referal-input__link__icon">
                    <LogoTelegram />
                </span>
                <span className="referal-input__link__title">
                    Telegram
                </span>
            </Link>
        ),
    },
    {
        key: '4',
        label: (
            <Link target="_blank" rel="noopener noreferrer" href={`https://www.instagram.com/?url=${encodeURIComponent(referal)}`} className='referal-input__link'>
                <span className="referal-input__link__icon">
                    <LogoInstagramFilled />
                </span>
                <span className="referal-input__link__title">
                    Instagram
                </span>
            </Link>
        ),
    },
    ];
    
    const copyToClipboard = async () => {
        await navigator.clipboard.writeText(referal);
        messageApi.open({
            type: 'success',
            content: 'Copied to clipboard!',
        });
    }

    const handleClickInput = (e: React.MouseEvent<HTMLInputElement>) => {
        e.currentTarget.select();
        copyToClipboard();
    }

    const handleClickButton = () => {
        copyToClipboard();
    }

    return (
        <div className="referal-input__wrapper">
            <div className="referal-input__group">
                <input className="referal-input" value={referal} readOnly onClick={handleClickInput} />
                <button className="referal-input__button" onClick={handleClickButton}>
                    <CopyIcon />
                </button>
            </div>
            <Dropdown menu={{ items }} placement="top" arrow={{ pointAtCenter: true }} overlayClassName='referal-input__dropdown'>
                <button className="referal-input__button">
                    <ShareIcon />
                </button>
            </Dropdown>
            {contextHolder}
        </div>
    )
}

export default ReferalInput