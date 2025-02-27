// /src/api/salon.ts
import axiosInstance from "./axiosInstance.ts";

export const getSalon = async () => {
    const response = await axiosInstance.get("/salons");
    return response.data;
};


export const updateSalon = async (updatedSalonData: any) => {
    const response = await axiosInstance.put("/salons", updatedSalonData);
    return response.data;
};


export const getSalonModified = async (lastModified: string) => {
    try {
        return await axiosInstance.get("/salons/modified", {
            headers: {
                "If-Modified-Since": lastModified,
            },
        });
    } catch (error: any) {
        if (error.response?.status === 304) {
            return error.response;
        }
        throw error;
    }
};


//old
export const createSalon = async (salonData: { name: string; description: string; address: string }) => {
    const response = await axiosInstance.post("/salons", salonData);
    return response.data;
};
