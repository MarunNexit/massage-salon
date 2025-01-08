// /src/api/workingHours.ts
import axios from 'axios';

const API_URL = import.meta.env.VITE_BACKEND_API;

export const getWorkingHours = async () => {
    try {
        const response = await axios.get(`${API_URL}/working-hours`);
        return response.data;
    } catch (error) {
        console.error('Error fetching working hours:', error);
        throw error;
    }
};

export const updateWorkingHours = async (id: string, workingHoursData: { days: string[]; hours: string[] }) => {
    try {
        const response = await axios.put(`${API_URL}/working-hours/${id}`, workingHoursData);
        return response.data;
    } catch (error) {
        console.error('Error updating working hours:', error);
        throw error;
    }
};
