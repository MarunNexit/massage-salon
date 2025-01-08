// /src/api/salon.ts
import axios from 'axios';

const API_URL = import.meta.env.VITE_BACKEND_API;

export const getSalon = async () => {
    try {
        const response = await axios.get(`${API_URL}/salons`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching salon info:', error);
        throw error;
    }
};


export const getSalonModified = async (lastModified: string) => {
    try {
        return await axios.get(`${API_URL}/salons/modified`, {
            headers: {
                'If-Modified-Since': lastModified
            }
        });
    } catch (error: any) {
        if(error.response.status === 304) {
            return error.response;
        }
        else{
            console.error('Error fetching salon info:', error);
            throw error;
        }
    }
};



export const createSalon = async (salonData: { name: string; description: string; address: string }) => {
    try {
        const response = await axios.post(`${API_URL}/salons`, salonData);
        return response.data;
    } catch (error) {
        console.error('Error creating salon:', error);
        throw error;
    }
};

export const updateSalon = async (id: string, salonData: { name: string; description: string; address: string }) => {
    try {
        const response = await axios.put(`${API_URL}/salons/${id}`, salonData);
        return response.data;
    } catch (error) {
        console.error('Error updating salon:', error);
        throw error;
    }
};
