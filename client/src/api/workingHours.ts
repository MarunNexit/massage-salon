// /src/api/workingHours.ts
import axiosInstance from "./axiosInstance.ts";

export const getWorkingHours = () =>
    axiosInstance.get('/working-hours').then(response => response.data);

export const updateWorkingHours = (id: string, workingHoursData: { days: string[]; hours: string[] }) =>
    axiosInstance.put(`/working-hours/${id}`, workingHoursData).then(response => response.data);
