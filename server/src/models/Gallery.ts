import mongoose, { Schema, Document } from 'mongoose';

interface IGallery extends Document {
    imageUrl: string;
    title?: string;
    dateAdded: Date;
}

const GallerySchema: Schema = new Schema({
    imageUrl: { type: String, required: true },
    title: { type: String },
    dateAdded: { type: Date, default: Date.now },
});

export default mongoose.model<IGallery>('Gallery', GallerySchema);
