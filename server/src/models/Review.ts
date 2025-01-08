// src/models/Review.ts
import mongoose, { Schema, Document } from 'mongoose';

interface IReview extends Document {
    name: string;
    rating: number;
    comment: string;
    date: Date;
    isApproved: boolean;
}

const ReviewSchema: Schema = new Schema({
    name: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, required: true },
    date: { type: Date, default: Date.now },
    isApproved: { type: Boolean, default: false },
});

export default mongoose.model<IReview>('Review', ReviewSchema);
