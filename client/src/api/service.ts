// /src/api/services.ts
import axios from 'axios';

const API_URL = import.meta.env.VITE_BACKEND_API;

export const getServices = async () => {
    try {
        const response = await axios.get(`${API_URL}/services`);
        return response.data;
    } catch (error) {
        console.error('Error fetching services:', error);
        throw error;
    }
};

export const createService = async (serviceData: { name: string; description: string; price: number }) => {
    try {
        const response = await axios.post(`${API_URL}/services`, serviceData);
        return response.data;
    } catch (error) {
        console.error('Error creating service:', error);
        throw error;
    }
};

export const updateService = async (id: string, serviceData: { name: string; description: string; price: number }) => {
    try {
        const response = await axios.put(`${API_URL}/services/${id}`, serviceData);
        return response.data;
    } catch (error) {
        console.error('Error updating service:', error);
        throw error;
    }
};

export const deleteService = async (id: string) => {
    try {
        const response = await axios.delete(`${API_URL}/services/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting service:', error);
        throw error;
    }
};
