import axios from 'axios';
import {ITeamMember} from "../models/team.ts";

const API_URL = import.meta.env.VITE_BACKEND_API;



export const getTeamMembers = async (): Promise<ITeamMember[]> => {
    try {
        const response = await axios.get(`${API_URL}/team-members`);
        return response.data;
    } catch (error) {
        console.error('Error fetching team members:', error);
        throw error;
    }
};

export const getTeamMembersForService = async (service_id: string): Promise<ITeamMember[]> => {
    try {
        const response = await axios.get(`${API_URL}/team-members/service/${service_id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching team members:', error);
        throw error;
    }
};

export const createTeamMember = async (teamMemberData: ITeamMember): Promise<ITeamMember> => {
    try {
        const response = await axios.post(`${API_URL}/team-members`, teamMemberData);
        return response.data;
    } catch (error) {
        console.error('Error creating team member:', error);
        throw error;
    }
};

export const deleteTeamMember = async (id: string): Promise<ITeamMember> => {
    try {
        const response = await axios.delete(`${API_URL}/team-members/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting team member:', error);
        throw error;
    }
};
