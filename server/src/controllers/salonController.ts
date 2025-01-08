import { Request, Response } from 'express';
import Salon from '../models/Salon';

// Створення нового салону
export const createSalon = async (req: Request, res: Response) => {
    try {
        const salon = new Salon(req.body);
        await salon.save();
        res.status(201).json(salon);
    } catch (error) {
        res.status(500).json({ message: 'Помилка при створенні салону', error });
    }
};

// Отримання інформації про салон
export const getSalon = async (_req: Request, res: Response) => {
    try {
        const salon = await Salon.findOne();
        res.status(200).json(salon);
    } catch (error) {
        res.status(500).json({ message: 'Помилка при отриманні інформації', error });
    }
};


export const getSalonModified = async (_req: Request, res: Response) => {
    try {
        const lastModified = _req.headers['if-modified-since'];
        const salon = await Salon.findOne();

        console.log(lastModified, salon);
        if(salon){
            if (lastModified && new Date(lastModified) >= salon.updatedAt) {
                res.status(304).send();
            }
            else {
                res.status(200).json(salon);
            }

/*
            res.setHeader('Last-Modified', salon.updatedAt.toUTCString());
*/
        }
    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


export const updateSalon = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updatedSalon = await Salon.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedSalon);
    } catch (error) {
        res.status(500).json({ message: 'Помилка при оновленні інформації', error });
    }
};
