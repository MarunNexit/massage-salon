// src/models/Service.ts
import mongoose, { Schema, Document } from 'mongoose';

interface IService extends Document {
    category: 'TOP' | 'ALL';
    name: string;
    duration: number;
    price: number;
    description: string;
    dateAdded: Date;
}

const ServiceSchema: Schema = new Schema({
    category: { type: String, enum: ['TOP', 'ALL'], required: true },
    name: { type: String, required: true },
    duration: { type: Number, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    dateAdded: { type: Date, default: Date.now },
});

export default mongoose.model<IService>('Service', ServiceSchema);
