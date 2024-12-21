"use client";

import React, { useEffect, useState } from 'react'
import "./Navbar.scss"
import Header from '../Header/Header';
import Button from '../UI/primitives/Button/Button';
import { ArrowDown, ArrowRightIcon, DialogIcon, DiamondGoldIcon, DollarIcon, DoorIcon, HangerIcon, HomeIcon, NotebookIcon, SettingsIcon, UsersIcon, WallpaperIcon } from '../UI/svg';
import { Link } from '@/i18n/routing';
import Image from 'next/image'

import AppleIconImage from '../../../public/Icons/AppleIcon.png'
import AndroidIconImage from '../../../public/Icons/AndroidIcon.png'
import { useModal } from '@/shared/hooks/useModal';
import { useClerk, useUser } from '@clerk/nextjs';
import { Dropdown, MenuProps, Skeleton } from 'antd';
import { getDbUser } from '@/shared/actions/getDbUser';
import IUser from '@/shared/interfaces/Models/IUser';
import ModalSupport from '../ModalSupport/ModalSupport';

const Navbar = () => {
    const { closeModal, isModalClosing, openModal } = useModal();
    const { isSignedIn, user, isLoaded } = useUser();
    const { signOut } = useClerk();
    const [dbUser, setDbUser] = useState<IUser | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const db = await getDbUser(user?.id);
                
                setDbUser(db)
            } catch(e) {
                console.error(e)
            }
        }

        fetchData();
    }, [user])

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <button className='navbar-user__dropdown-button'>
                    <span className="icon">
                        <SettingsIcon />
                    </span>
                    Edit profile
                </button>
            ),
        },
        {
            key: '2',
            label: (
                <button onClick={() => { signOut() }} className='navbar-user__dropdown-button'>
                    <span className="icon">
                        <DoorIcon />
                    </span>
                    Log out
                </button>
            ),
        }
    ];

    return (
        <div className="navbar__layout" onClick={() => closeModal()}>
            <nav className={`navbar ${isModalClosing ? 'navbar--exit' : ''}`} onClick={(e) => e.stopPropagation()}>
                <Header variant='navbar' className='navbar__header' />
                <div className="navbar__button-wrapper">
                    {!isLoaded ?
                        <Skeleton avatar /> 
                    :
                    (user ? 
                        <Dropdown menu={{ items }} placement="bottom" arrow={{ pointAtCenter: true }} overlayClassName='navbar-user__dropdown'>
                            <div className="navbar-user">
                                <Image
                                    src={user.imageUrl}
                                    alt="Avatar"
                                    width={60}
                                    height={60}
                                    className='navbar-user__avatar'
                                />
                                <div className="navbar-user__info">
                                    <div className="navbar-user__info-name">
                                        {user.lastName && user.firstName ?
                                        user.firstName.slice(0, 1).toUpperCase() + ". " + user.lastName :
                                        (user.firstName ? user.firstName : "You")
                                        }
                                        <div className="icon">
                                            <ArrowDown />
                                        </div>
                                    </div>
                                    <div className="navbar-user__info-description">
                                        Personal space
                                    </div>
                                </div>
                                {/* <div className="navbar-user__balance">
                                    {dbUser?.coins}
                                    <div className="icon navbar-user__balance-icon">
                                        <DiamondGoldIcon />
                                    </div>
                                </div> */}
                            </div>
                        </Dropdown>
                        :
                        <Button href="/login" color="gray" className="navbar__button" iconRight={<ArrowRightIcon />} onClick={() => { closeModal() }}>
                            Log in
                        </Button>
                    )
                    }
                </div>
                <hr className="navbar__hr" />
                <div className="navbar-list__wrapper">
                    <ul className="navbar-list">
                        <Link href="/" className="navbar-list__item" onClick={() => { closeModal() }}>
                            <div className="icon navbar-list__icon">
                                <HomeIcon />
                            </div>
                            Home
                        </Link>
                        <Link href="/buy" className="navbar-list__item" onClick={() => { closeModal() }}>
                            <div className="icon navbar-list__icon">
                                <DollarIcon />
                            </div>
                            Buy coins
                        </Link>
                        <Link href="/referal" className="navbar-list__item" onClick={() => { closeModal() }}>
                            <div className="icon navbar-list__icon">
                                <UsersIcon />
                            </div>
                            Referal program
                        </Link>
                        <Link href="/gallery" className="navbar-list__item" onClick={() => { closeModal() }}>
                            <div className="icon navbar-list__icon">
                                <WallpaperIcon />
                            </div>
                            Gallery
                        </Link>
                        <Link href="/blog" className="navbar-list__item" onClick={() => { closeModal() }}>
                            <div className="icon navbar-list__icon">
                                <NotebookIcon />
                            </div>
                            Blog
                        </Link>
                        <div className="navbar-list__item" onClick={() => { openModal(<ModalSupport />) }}>
                            <div className="icon navbar-list__icon">
                                <DialogIcon />
                            </div>
                            Customer support
                        </div>
                    </ul>
                </div>
                <div className="navbar-footer">
                    <Button href='/generation' iconLeft={<HangerIcon />} className="navbar-footer__button">
                        Undress
                    </Button>
                    <div className="navbar-footer__buttons">
                        <Link href="/ios" className="navbar-footer__buttons-item" onClick={() => { closeModal() }}>
                            <Image 
                                src={AppleIconImage}
                                alt="AppleIcon"
                                className='navbar-footer__buttons-icon'
                                width={40}
                                height={40}
                            />
                            Apple IOS
                        </Link>
                        <Link href="/android" className="navbar-footer__buttons-item" onClick={() => { closeModal() }}>
                            <Image 
                                src={AndroidIconImage}
                                alt="AndroidIcon"
                                className='navbar-footer__buttons-icon'
                                width={40}
                                height={40}
                            />
                            Android
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar