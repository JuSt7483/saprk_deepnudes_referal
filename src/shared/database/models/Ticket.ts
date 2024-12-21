import mongoose, { Schema, Types, model } from 'mongoose';

// Schema
export const TicketSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    text: { type: String, required: true  },
    attachments: { type: String, required: false  },
}, { timestamps: true });

// `UserModel` will have `name: string`, etc.
export const Ticket = mongoose.models.Ticket || mongoose.model('Ticket', TicketSchema);