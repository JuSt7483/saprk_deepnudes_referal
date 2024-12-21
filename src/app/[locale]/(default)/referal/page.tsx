import Heading from '@/components/UI/primitives/Heading/Heading'
import React from 'react'

import { CardIcon, ChartIcon, CopyIcon, InviteIcon } from '@/components/UI/svg'
import ReferalInput from '@/components/ReferalInput/ReferalInput'
import AccountConvert from '@/components/AccountConvert/AccountConvert'
import { dbConnect } from '@/shared/database/db'
import { auth, currentUser } from '@clerk/nextjs/server'
import { User } from '@/shared/database/models/User'
import IUser from '@/shared/interfaces/Models/IUser'

import "./page.scss"
import { getDbUser } from '../../../../shared/actions/getDbUser'

const ReferalPage = async () => {
    auth().protect();
    const dbUser = await getDbUser()

    console.log(dbUser, "dbuser")
    return (
        <div className='referal-page'>
            <Heading breadcrump={[{ href: "referal", title: "Referal program" }]}>Referal program</Heading>
            <div className="referal-page__inner">
                <div className="referal-page__main">
                    <div className="referal-page__part">
                        <ul className="referal-page__grid">
                            <li className="referal-page__block">
                                <div className="referal-page__block-header">
                                    <div className="icon referal-page__block-icon">
                                        <CopyIcon />
                                    </div>
                                    01
                                </div>
                                <div className="referal-page__block-text">
                                    <p>
                                        Copy the invitation link and send it to your friends
                                    </p>
                                </div>
                            </li>
                            <li className="referal-page__block">
                                <div className="referal-page__block-header">
                                    <div className="icon referal-page__block-icon">
                                        <InviteIcon />
                                    </div>
                                    02
                                </div>
                                <div className="referal-page__block-text">
                                    <p>
                                        Invite people, earn 25% from their deposits, for all their time
                                    </p>
                                </div>
                            </li>
                            <li className="referal-page__block">
                                <div className="referal-page__block-header">
                                    <div className="icon referal-page__block-icon">
                                        <ChartIcon />
                                    </div>
                                    03
                                </div>
                                <div className="referal-page__block-text">
                                    <p>
                                        Get detailed statistics of registrations and deposits using your link, by day
                                    </p>
                                </div>
                            </li>
                            <li className="referal-page__block">
                                <div className="referal-page__block-header">
                                    <div className="icon referal-page__block-icon">
                                        <CardIcon />
                                    </div>
                                    04
                                </div>
                                <div className="referal-page__block-text">
                                    <p>
                                        Copy the invitation link and send it to your friends
                                    </p>
                                </div>
                            </li>
                        </ul>
                        <div className="referal-page__input">
                            <div className="referal-page__input-heading">
                                Your invitation link:
                            </div>
                            <ReferalInput id={dbUser?.referalString || ""} />
                        </div>
                    </div>
                    <div className="referal-page__part">
                        <AccountConvert balance={dbUser?.dollars}/>
                    </div>
                </div>
                <div className="referal-page__table">
                    <h2 className="referal-page__heading">
                        Your referals
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default ReferalPage