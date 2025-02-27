// /src/api/review.ts
import {IApprovedReviews} from "../models/reviews.ts";
import axiosInstance from "./axiosInstance.ts";

export const getReviews = async () => {
    const response = await axiosInstance.get(`/reviews`);
    return response.data;
};

export const getApprovedReviews = async (): Promise<IApprovedReviews[]> => {
    const response = await axiosInstance.get(`/reviews`, { params: { isApproved: true } });
    return response.data;
};

export const createReview = async (reviewData: { content: string; rating: number }) => {
    const response = await axiosInstance.post(`/reviews`, reviewData);
    return response.data;
};

export const deleteReview = async (id: string) => {
    const response = await axiosInstance.delete(`/reviews/${id}`);
    return response.data;
};
