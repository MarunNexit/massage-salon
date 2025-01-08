import mongoose, {Document, Types} from "mongoose";

interface IAppointment extends Document {
    email: string;
    phone: string;
    serviceId: Types.ObjectId;
    masterId: Types.ObjectId;
    dateTime: Date;
}

const AppointmentSchema = new mongoose.Schema({
    email: { type: String, required: true },
    phone: { type: String, required: true },
    serviceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true },
    masterId: { type: mongoose.Schema.Types.ObjectId, ref: 'Master', required: true },
    dateTime: { type: Date, required: true },
});

export default mongoose.model<IAppointment>('Appointment', AppointmentSchema);
