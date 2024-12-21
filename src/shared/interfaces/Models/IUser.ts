import IPayment from "./IPayment";
import IReferal from "./IReferal";
import {Types} from "mongoose";

export default interface IUser {
    externalId: string;
    coins: number;
    dollars: number;
    referalString: string;
    payments: [IPayment];
    referals: [IReferal];
    _id: Types.UUID;
}