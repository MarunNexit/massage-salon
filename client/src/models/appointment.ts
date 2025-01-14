export interface AppointmentCreateData {
    email: string;
    phone: string;
    serviceId: string;
    masterId: string;
    date: Date | null;
    time: string | null;
}