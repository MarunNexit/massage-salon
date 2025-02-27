import {ITeamMember} from "../models/team.ts";
import axiosInstance from "./axiosInstance.ts";

export const getTeamMembers = async (): Promise<ITeamMember[]> =>
    (await axiosInstance.get('/team-members')).data;

export const getTeamMembersForService = async (service_id: string): Promise<ITeamMember[]> =>
    (await axiosInstance.get(`/team-members/service/${service_id}`)).data;

export const createTeamMember = async (teamMemberData: ITeamMember): Promise<ITeamMember> =>
    (await axiosInstance.post('/team-members', teamMemberData)).data;

export const deleteTeamMember = async (id: string): Promise<ITeamMember> =>
    (await axiosInstance.delete(`/team-members/${id}`)).data;

