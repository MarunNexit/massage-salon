import { Request, Response } from 'express';
import Service from '../models/Service';

// Створення нової послуги
export const createService = async (req: Request, res: Response) => {
    try {
        const service = new Service(req.body);
        await service.save();
        res.status(201).json(service);
    } catch (error) {
        res.status(500).json({ message: 'Помилка при створенні послуги', error });
    }
};

// Отримання всіх послуг
export const getServices = async (_req: Request, res: Response) => {
    try {
        const services = await Service.find();
        res.status(200).json(services);
    } catch (error) {
        res.status(500).json({ message: 'Помилка при отриманні послуг', error });
    }
};

// Оновлення послуги
export const updateService = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updatedService = await Service.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedService);
    } catch (error) {
        res.status(500).json({ message: 'Помилка при оновленні послуги', error });
    }
};

// Видалення послуги
export const deleteService = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await Service.findByIdAndDelete(id);
        res.status(200).json({ message: 'Послугу видалено' });
    } catch (error) {
        res.status(500).json({ message: 'Помилка при видаленні послуги', error });
    }
};
