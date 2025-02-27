import {IGallery} from "../models/gallery.ts";
import axiosInstance from "./axiosInstance.ts";

export const getGallery = async (): Promise<IGallery[]> => {
    const response = await axiosInstance.get(`/gallery`);
    return response.data;
};

export const uploadImage = async (imageData: FormData) => {
    const response = await axiosInstance.post(`/gallery`, imageData, {
        headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
};

export const deleteImage = async (id: string) => {
    const response = await axiosInstance.delete(`/gallery/${id}`);
    return response.data;
};