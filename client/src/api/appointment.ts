import {AppointmentCreateData} from "../models/appointment.ts";
import axiosInstance from "./axiosInstance.ts";

export const createAppointment = async (appointmentData: AppointmentCreateData) => {
    const response = await axiosInstance.post(`/appointments/`, appointmentData);
    return response.data;
};

export const getAvailableMasterHours = async (masterId: string | null, date: Date | null) => {
    if (date) {
        const formattedDate = date.toISOString().split('T')[0];
        const response = await axiosInstance.get(`/appointments/hours/`, {
            params: { masterId, date: formattedDate },
        });
        return response.data;
    }
};
