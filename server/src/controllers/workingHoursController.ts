import { Request, Response } from 'express';
import WorkingHours from '../models/WorkingHours';

/*
// Додати робочі години
export const createWorkingHours = async (req: Request, res: Response) => {
    try {
        const workingHours = new WorkingHours(req.body);
        await workingHours.save();
        res.status(201).json(workingHours);
    } catch (error) {
        res.status(500).json({ message: 'Помилка при додаванні робочих годин', error });
    }
};
*/

export const getWorkingHours = async (_req: Request, res: Response) => {
    try {
        const workingHours = await WorkingHours.findOne();
        res.status(200).json(workingHours);
    } catch (error) {
        res.status(500).json({ message: 'Помилка при отриманні робочих годин', error });
    }
};

export const updateWorkingHours = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updatedWorkingHours = await WorkingHours.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedWorkingHours);
    } catch (error) {
        res.status(500).json({ message: 'Помилка при оновленні робочих годин', error });
    }
};
