import IReferal from '@/shared/interfaces/Models/IReferal';
import mongoose, { Schema, Types, model } from 'mongoose';

export const ReferalSchema = new Schema<IReferal>({
    email: { type: String, required: true },
    value: { type: Number, required: true },
}, { timestamps: true });

export const Referal = mongoose.models.Referal || mongoose.model('Referal', ReferalSchema);