import mongoose, { Schema, Document } from 'mongoose';

interface ISocialLink extends Document {
    platform: string;
    url: string;
}

const SocialLinkSchema: Schema = new Schema({
    platform: { type: String, required: true },
    url: { type: String, required: true },
});

export default mongoose.model<ISocialLink>('SocialLink', SocialLinkSchema);
