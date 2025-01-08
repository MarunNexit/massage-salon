// /src/controllers/teamMemberController.ts
import { Request, Response } from 'express';
import Team from "../models/Team";

// Отримати всіх учасників команди
export const getTeamMembers = async (req: Request, res: Response) => {
    try {
        const teamMembers = await Team.find();
        res.json(teamMembers);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching team members' });
    }
};

export const getTeamMembersForService = async (req: Request, res: Response) => {
    const { service_id } = req.params;

    try {
        const teamMembers = await Team.find({ services: service_id }).populate('services');

        if (!teamMembers.length) {
            res.status(404).json({ message: 'No team members found for this service' });
        }
        else {
            res.status(200).json(teamMembers);
        }
    } catch (error) {
        console.error('Error fetching team members:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Отримати одного учасника команди
export const getTeamMember = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const teamMember = await Team.findById(id);
        if (!teamMember) {
            res.status(404).json({ message: 'Team member not found' });
        }
        res.json(teamMember);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching team member' });
    }
};

// Створити нового учасника команди
export const createTeamMember = async (req: Request, res: Response) => {
    const { name, position, image } = req.body;
    try {
        const newTeamMember = new Team({ name, position, image });
        await newTeamMember.save();
        res.status(201).json(newTeamMember);
    } catch (error) {
        res.status(500).json({ message: 'Error creating team member' });
    }
};

// Оновити учасника команди
export const updateTeamMember = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, position, image } = req.body;
    try {
        const updatedTeamMember = await Team.findByIdAndUpdate(
            id,
            { name, position, image },
            { new: true }
        );
        if (!updatedTeamMember) {
            res.status(404).json({ message: 'Team member not found' });
        }
        res.json(updatedTeamMember);
    } catch (error) {
        res.status(500).json({ message: 'Error updating team member' });
    }
};

// Видалити учасника команди
export const deleteTeamMember = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const deletedTeamMember = await Team.findByIdAndDelete(id);
        if (!deletedTeamMember) {
            res.status(404).json({ message: 'Team member not found' });
        }
        res.json({ message: 'Team member deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting team member' });
    }
};
