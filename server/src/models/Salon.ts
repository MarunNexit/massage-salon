import mongoose, { Schema, Document } from 'mongoose';

interface ISalon extends Document {
    name: string;
    phone: string;
    address: string;
    logo?: string;
    description: string;
    closureReason?: string;
    updatedAt: Date;
}

const SalonSchema: Schema = new Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    logo: { type: String },
    description: { type: String, required: true },
    closureReason: { type: String },
    updatedAt: { type: Date, required: true },
});

export default mongoose.model<ISalon>('Salon', SalonSchema);
