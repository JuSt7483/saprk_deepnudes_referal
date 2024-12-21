import PayCard from '@/components/PayCard/PayCard';
import PayCrypto from '@/components/PayCrypto/PayCrypto';
import { getStrapiData } from '@/shared/actions/getStrapiData';
import { PayMethod } from '@/shared/enums/PayMethod';
import React from 'react'

const page = async ({ params: { tariff, method } }: { params: { tariff: string; method: PayMethod; } }) => {
	const tariffData = await getStrapiData(`/api/tariffs/${tariff}?populate=*`);

	if(!tariffData || !method) return <>No data</>

	if(method === PayMethod.CRYPTO)
		return (
			<PayCrypto amount={tariffData.data.price * (100 - tariffData.data.discountPercent) / 100} />
		)
	else {
		return (
			<PayCard amount={tariffData.data.price * (100 - tariffData.data.discountPercent) / 100} />
		)
	}

	return (
		<div>{tariff} {method}</div>
	)
}

export default page