import axios from 'axios';
import {AppointmentCreateData} from "../models/appointment.ts";

const API_URL = import.meta.env.VITE_BACKEND_API;

export const createAppointment = async (appointmentData: AppointmentCreateData) => {
    try {
        const response = await axios.post(`${API_URL}/appointments/`, appointmentData);
        if(response.data && response.data.message == 'Запис створено'){
            return response.data;
        }
        return null;
    } catch (error: any) {
        console.error('Error:', error.response ? error.response.data : error.message); // Обробка помилки
    }
};

export const getAvailableMasterHours = async (masterId: string | null, date: Date | null) => {
    try {
        if(date){
            const formattedDate = date.toISOString().split('T')[0];

            const response = await axios.get(`${API_URL}/appointments/hours/`, {
                params: { masterId: masterId, date: formattedDate },
            });

            return response.data
        }
    } catch (error: any) {
        console.error('Error:', error.response ? error.response.data : error.message); // Обробка помилки
    }
};
