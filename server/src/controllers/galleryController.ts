import { Request, Response } from 'express';
import Gallery from '../models/Gallery';

// Завантаження зображення в галерею
export const uploadImage = async (req: Request, res: Response) => {
    try {
        const image = new Gallery(req.body);
        await image.save();
        res.status(201).json(image);
    } catch (error) {
        res.status(500).json({ message: 'Помилка при завантаженні зображення', error });
    }
};

// Отримання всіх зображень
export const getGallery = async (_req: Request, res: Response) => {
    try {
        const gallery = await Gallery.find();
        res.status(200).json(gallery);
    } catch (error) {
        res.status(500).json({ message: 'Помилка при отриманні галереї', error });
    }
};

// Видалення зображення
export const deleteImage = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await Gallery.findByIdAndDelete(id);
        res.status(200).json({ message: 'Зображення видалено' });
    } catch (error) {
        res.status(500).json({ message: 'Помилка при видаленні зображення', error });
    }
};
