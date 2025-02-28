import mongoose, { Schema, Document } from 'mongoose';

interface ITeamMember extends Document {
    name: string;
    position: string;
    image: string;
    services: mongoose.Types.ObjectId[];
    workingDays: mongoose.Types.ObjectId[];
}

const TeamMemberSchema: Schema = new Schema({
    name: { type: String, required: true },
    position: { type: String, required: true },
    image: { type: String, required: true },
    services: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Service' }],
    workingDays: [{ type: mongoose.Schema.Types.ObjectId, ref: 'WorkingHours' }],
});

export default mongoose.model<ITeamMember>('TeamMember', TeamMemberSchema);
