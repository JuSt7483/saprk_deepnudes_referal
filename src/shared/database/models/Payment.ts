import { PaymentDone } from '@/shared/enums/PaymentDone';
import mongoose, { Schema, Types, model } from 'mongoose';

// Schema
export const PaymentSchema = new Schema({
    value: { type: Number, required: true },
    coins: { type: Number, required: true },
    status: { type: String, required: true, enum: PaymentDone },
    comment: { type: String },
}, { timestamps: true });

// `UserModel` will have `name: string`, etc.
export const Payment = mongoose.models.Payment || mongoose.model('Payment', PaymentSchema);