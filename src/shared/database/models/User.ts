import mongoose, { Schema, Types, model } from 'mongoose';
import { PaymentSchema } from './Payment';
import { ReferalSchema } from './Referal';
import IUser from '@/shared/interfaces/Models/IUser';

// Schema
export const UserSchema = new Schema<IUser>({
    externalId: { type: String, required: true },
    coins: { type: Number, required: true, default: 0 },
    dollars: { type: Number, required: true, default: 0 },
    referalString: { type: String, required: true },
    payments: [PaymentSchema],
    referals: [ReferalSchema]
}, { timestamps: true });

// UserSchema.post('save', async function(doc: IUser) {
//   await updateClerkUser(doc)
//   console.log("clerkUserUpdated: ", doc)
// });

// `UserModel` will have `name: string`, etc.
export const User = mongoose.models.User || mongoose.model('User', UserSchema);