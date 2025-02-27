// /src/api/services.ts

import axiosInstance from "./axiosInstance.ts";

export const getServices = async () => {
    const response = await axiosInstance.get(`/services`);
    return response.data;
};

export const createService = async (serviceData: { name: string; description: string; price: number }) => {
    const response = await axiosInstance.post(`/services`, serviceData);
    return response.data;
};

export const updateService = async (id: string, serviceData: { name: string; description: string; price: number }) => {
    const response = await axiosInstance.put(`/services/${id}`, serviceData);
    return response.data;
};

export const deleteService = async (id: string) => {
    const response = await axiosInstance.delete(`/services/${id}`);
    return response.data;
};
