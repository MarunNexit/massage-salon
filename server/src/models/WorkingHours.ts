import mongoose, { Schema, Document } from 'mongoose';

interface IWorkingHours extends Document {
    day: string;
    hours: string;
}

const WorkingHoursSchema: Schema = new Schema({
    day: { type: String, required: true },
    hours: { type: String, required: true },
});

export default mongoose.model<IWorkingHours>('WorkingHours', WorkingHoursSchema);
