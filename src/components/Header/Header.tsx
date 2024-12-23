"use client";

import React, { useEffect, useState } from 'react'
import {
	AddCircleIcon,
	DiamondGoldIcon,
	Logo,
	LogoSmall,
	LogoSquareIcon,
	PlusIcon,
	SettingsIcon,
	DoorIcon,
	DoorOutIcon,
	ArrowDown,
	ArrowRightIcon,
} from '../UI/svg'
import Navbar from '../Navbar/Navbar';
import { useModal } from '@/shared/hooks/useModal';
import BurgerButton from '../UI/primitives/ButtonBurger/ButtonBurger';
import Button from '../UI/primitives/Button/Button';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import { useUser } from '@clerk/nextjs';
import { Link } from '@/i18n/routing';
import { getDbUser } from '@/shared/actions/getDbUser';
import IUser from '@/shared/interfaces/Models/IUser';
import { Dropdown, MenuProps, Skeleton } from 'antd';
import Image from 'next/image'
import { useClerk } from '@clerk/nextjs';


interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    variant?: "default" | "navbar" | "login" | "layout-right" | "home";
}

function Header({ className, variant = "default" }: HeaderProps) {
    const { openModal, closeModal } = useModal();
    const { isSignedIn, user, isLoaded } = useUser();
    const [dbUser, setDbUser] = useState<IUser | null>(null);
    const { signOut } = useClerk();

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

    useEffect(() => {
        const fetchData = async () => {
            try {
                const db = await getDbUser(user?.id);
                
                setDbUser(db)
            } catch(e) {
                console.error(e)
            }
        }

        if(user?.id && variant === "layout-right")
            fetchData();
    }, [user, variant])

    if(variant === "default")
        return (
					<>
						<header className={`header header--default ${className ?? ''}`}>
							<Link
								className={`icon header__logo header__logo--absolute`}
								href={'/'}
							>
								<Logo className='hidden-mobile'/>
                                <LogoSmall className='visible-mobile' height={44}/>
							</Link>

							<button
								onClick={() => {
									signOut()
								}}
								className='header-user__dropdown-button'
							>
								<span className='header-user__dropdown-icon icon'>
									<DoorOutIcon />
								</span>
								Log out
							</button>
							<div className='header__button-wrapper'>
								{!isLoaded ? (
									<Skeleton avatar />
								) : user ? (
									<Dropdown
										menu={{ items }}
										placement='bottom'
										arrow={{ pointAtCenter: true }}
										overlayClassName='navbar-user__dropdown'
									>
										<div className='header-user'>
											<Image
												src={user.imageUrl}
												alt='Avatar'
												width={60}
												height={60}
												className='header-user__avatar'
											/>
											<div className='header-user__info'>
												<div className='header-user__info-name'>
													{user.lastName && user.firstName
														? user.firstName.slice(0, 1).toUpperCase() +
														  '. ' +
														  user.lastName
														: user.firstName
														? user.firstName
														: 'You'}
													<div className='icon'>
														<ArrowDown />
													</div>
												</div>
												<div className='navbar-user__info-description hidden-mobile'>
													Personal space
												</div>
											</div>
										</div>
									</Dropdown>
								) : (
									<Button
										href='/login'
										color='gray'
										className='navbar__button'
										iconRight={<ArrowRightIcon />}
										onClick={() => {
											closeModal()
										}}
									>
										Log in
									</Button>
								)}
							</div>
						</header>
					</>
				)

    if(variant === "home")
        return (
            <>
                <header className={`header header--home ${className ?? ""}`}>
                    <Link className={`icon header__logo`} href={"/"}>
                        <Logo />
                    </Link>
                    <LanguageSelector className="header__language hidden-mobile header__language--right" />
                    <BurgerButton onClick={() => { openModal(<Navbar />) }} className='header__burger' />
                </header>
            </>
        )

    if(variant === "layout-right")
        return (
            <>
                <header className={`header header--layout-right ${className ?? ""}`}>
                    <Link className={`icon header__logo header__logo--square`} href={"/"} onClick={() => closeModal()}>
                        <LogoSquareIcon />
                    </Link>
                    <div className="header-balance">
                        {dbUser?.coins && dbUser?.coins > 0 ?
                            <div className="header-balance__inner">
                                <div className="header-balance__mode">
                                    ultra mode
                                </div>
                            </div> :
                            <div className="header-balance__inner header-balance__inner--background">
                                <div className="header-balance__free">
                                    free mode
                                </div>
                                <Link href={"/buy"} className="header-balance__mode">
                                    get a pro
                                    <span className="icon header-balance__mode-icon">
                                        <AddCircleIcon />
                                    </span>
                                </Link>
                            </div>
                        }
                        {/*<div className="header-balance__info">*/}
                        {/*    {dbUser?.coins !== null ? dbUser?.coins : "..."}*/}
                        {/*    <div className="icon">*/}
                        {/*        <DiamondGoldIcon />*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<Button variant='small' iconRight={<AddCircleIcon />}>*/}
                        {/*    Buy*/}
                        {/*</Button>*/}
                    </div>
                    <LanguageSelector variant='square' className="header__language header__language--right" />
                    <BurgerButton onClick={() => { openModal(<Navbar />) }} className='header__burger header__burger--right' />
                </header>
            </>
        )

    if(variant === "navbar")
        return (
            <>
                <header className={`header ${className ?? ""}`}>
                    <Link className={`icon header__logo`} href={"/"} onClick={() => closeModal()}>
                        <Logo />
                    </Link>
                    <LanguageSelector className="header__language hidden-mobile header__language--right" />
                    <BurgerButton open onClick={() => { closeModal() }} className='header__burger header__burger--navbar' />
                </header>
            </>
        )

    if(variant === "login")
        return (
            <>
                <header className={`header header--login ${className ?? ""}`}>
                    <Link className={`icon header__logo header__logo--centered`} href={"/"}>
                        <Logo />
                    </Link>
                    <BurgerButton onClick={() => { openModal(<Navbar />) }} className='header__burger' />
                </header>
            </>
        )
}

export default Header