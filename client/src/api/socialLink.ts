import {ISocialLink} from "../models/socialLink.ts";
import axiosInstance from "./axiosInstance.ts";

export const getSocialLinks = async (): Promise<ISocialLink[]> => {
    const response = await axiosInstance.get(`/social-links`);
    return response.data;
};

export const createSocialLink = async (socialLinkData: ISocialLink): Promise<ISocialLink> => {
    const response = await axiosInstance.post(`/social-links`, socialLinkData);
    return response.data;
};

export const deleteSocialLink = async (id: string): Promise<ISocialLink> => {
    const response = await axiosInstance.delete(`/social-links/${id}`);
    return response.data;
};
