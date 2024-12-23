import Heading from '@/components/UI/primitives/Heading/Heading'
import React from 'react'
import Image from 'next/image'

import { CardIcon, ChartIcon, CopyIcon, InviteIcon } from '@/components/UI/svg'
import GoldCoins from '../../../public/Images/GoldCoins.png'
import ReferalInput from '@/components/ReferalInput/ReferalInput'
import AccountConvert from '@/components/AccountConvert/AccountConvert'
import { auth } from '@clerk/nextjs/server'


import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

import './style.scss'
import { getDbUser } from '../../shared/actions/getDbUser'


const ReferalPage = async () => {
	auth().protect()
	const dbUser = await getDbUser()

	console.log(dbUser, 'dbuser')
	return (
		<>
			<Header />
			<div className='referal-page container' style={{ marginBottom: '80px' }}>
				<Heading>Referal program</Heading>
				<div className='referal-page__inner'>
					<div className='referal-page__precents'>
						<h4 className='referal-page__precents-title'>
							YOUR REFERAL PROGRAM PERCENT
						</h4>
						<div className='referal-page__precents-value'>15%</div>
					</div>
					<div className='referal-page__main'>
						<div className='referal-page__part referal-page__part--steps'>
							<ul className='referal-page__grid'>
								<li className='referal-page__block'>
									<div className='referal-page__block-header'>
										<div className='icon referal-page__block-icon'>
											<CopyIcon />
										</div>
										01
									</div>
									<div className='referal-page__block-text'>
										<p>Copy the invitation link and send it to your friends</p>
									</div>
								</li>
								<li className='referal-page__block'>
									<div className='referal-page__block-header'>
										<div className='icon referal-page__block-icon'>
											<InviteIcon />
										</div>
										02
									</div>
									<div className='referal-page__block-text'>
										<p>
											Invite people, earn 25% from their deposits, for all their
											time
										</p>
									</div>
								</li>
								<li className='referal-page__block'>
									<div className='referal-page__block-header'>
										<div className='icon referal-page__block-icon'>
											<ChartIcon />
										</div>
										03
									</div>
									<div className='referal-page__block-text'>
										<p>
											Get detailed statistics of registrations and deposits
											using your link, by day
										</p>
									</div>
								</li>
								<li className='referal-page__block'>
									<div className='referal-page__block-header'>
										<div className='icon referal-page__block-icon'>
											<CardIcon />
										</div>
										04
									</div>
									<div className='referal-page__block-text'>
										<p>Copy the invitation link and send it to your friends</p>
									</div>
								</li>
							</ul>
							<div className='referal-page__input'>
								<div className='referal-page__input-heading'>
									Your invitation link:
								</div>
								<ReferalInput id={dbUser?.referalString || ''} />
							</div>
						</div>
						<div className='referal-page__part referal-page__part--convert'>
							<AccountConvert balance={dbUser?.dollars} />
						</div>
					</div>
					<div className='referal-page__invite'>
						<div className='referal-page__invite-text'>
							<h3 className='referal-page__invite-title'>
								Invite your friends & earn money
							</h3>
							<p className='referal-page__invite-description'>
								When your friend makes their first payment - Earn{' '}
								<span className='referal-page__invite-description--accent'>
									15% per payment
								</span>
							</p>
						</div>
						<div className='referal-page__invite-group'>
							<input className='referal-page__invite-input' value={'USER123'} />
							<button className='referal-page__invite-input-button'>
								<p>Copy</p>
							</button>
						</div>
						<Image
							src={GoldCoins}
							alt='Gold coins'
							className='referal-page__invite-image'
						/>
					</div>
					<div className='referal-page__table' style={{ marginTop: '68px' }}>
						<h2 className='referal-page__heading'>Your referals</h2>
						<div className='referal-page__message'>
							<p className='referal-page__message-text'>
								You don't have any referrals yet
							</p>
						</div>
					</div>
				</div>
			</div>
			<Footer className='container' />
		</>
	)
}

export default ReferalPage
