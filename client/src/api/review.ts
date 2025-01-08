// /src/api/review.ts
import axios from 'axios';
import {IApprovedReviews} from "../models/reviews.ts";

const API_URL = import.meta.env.VITE_BACKEND_API;

export const getReviews = async () => {
    try {
        const response = await axios.get(`${API_URL}/reviews`);
        return response.data;
    } catch (error) {
        console.error('Error fetching reviews:', error);
        throw error;
    }
};

export const getApprovedReviews  = async (): Promise<IApprovedReviews[]> => {
    try {
        const response = await axios.get(`${API_URL}/reviews?isApproved=true`);
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error('Error fetching reviews:', error);
        throw error;
    }
};

export const createReview = async (reviewData: { content: string; rating: number }) => {
    try {
        const response = await axios.post(`${API_URL}/reviews`, reviewData);
        return response.data;
    } catch (error) {
        console.error('Error creating review:', error);
        throw error;
    }
};

export const deleteReview = async (id: string) => {
    try {
        const response = await axios.delete(`${API_URL}/reviews/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting review:', error);
        throw error;
    }
};
