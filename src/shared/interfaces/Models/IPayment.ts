
export default interface IPayment {
	key?: string;
	value: number;
	coins: number;
	// status: PaymentDone;
	comment: string;
	createdAt: string;
	_id: any;
}