import axios from 'axios';
import {IGallery} from "../models/gallery.ts";

const API_URL = import.meta.env.VITE_BACKEND_API;

export const getGallery = async (): Promise<IGallery[]> => {
    try {
        const response = await axios.get(`${API_URL}/gallery`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching gallery:', error);
        throw error;
    }
};

export const uploadImage = async (imageData: FormData) => {
    try {
        const response = await axios.post(`${API_URL}/gallery`, imageData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error uploading image:', error);
        throw error;
    }
};

export const deleteImage = async (id: string) => {
    try {
        const response = await axios.delete(`${API_URL}/gallery/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting image:', error);
        throw error;
    }
};
