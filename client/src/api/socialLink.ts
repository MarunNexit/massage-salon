import axios from 'axios';
import {ISocialLink} from "../models/socialLink.ts";

const API_URL = import.meta.env.VITE_BACKEND_API;

export const getSocialLinks = async (): Promise<ISocialLink[]> => {
    try {
        const response = await axios.get(`${API_URL}/social-links`);
        return response.data;
    } catch (error) {
        console.error('Error fetching social links:', error);
        throw error;
    }
};

export const createSocialLink = async (socialLinkData: ISocialLink): Promise<ISocialLink> => {
    try {
        const response = await axios.post(`${API_URL}/social-links`, socialLinkData);
        return response.data;
    } catch (error) {
        console.error('Error creating social link:', error);
        throw error;
    }
};

export const deleteSocialLink = async (id: string): Promise<ISocialLink> => {
    try {
        const response = await axios.delete(`${API_URL}/social-links/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting social link:', error);
        throw error;
    }
};
