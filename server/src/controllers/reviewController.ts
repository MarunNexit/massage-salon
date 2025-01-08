import { Request, Response } from 'express';
import Review from '../models/Review';

// Додати новий відгук
export const createReview = async (req: Request, res: Response) => {
    try {
        const review = new Review(req.body);
        await review.save();
        res.status(201).json(review);
    } catch (error) {
        res.status(500).json({ message: 'Помилка при створенні відгуку', error });
    }
};

// Отримання всіх відгуків
export const getReviews = async (_req: Request, res: Response) => {
    try {
        const reviews = await Review.find();
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ message: 'Помилка при отриманні відгуків', error });
    }
};

export const getApprovedReviews = async (_req: Request, res: Response) => {
    try {
        const reviews = await Review.find({ isApproved: true });
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ message: 'Помилка при отриманні відгуків', error });
    }
};

// Видалення відгуку
export const deleteReview = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await Review.findByIdAndDelete(id);
        res.status(200).json({ message: 'Відгук видалено' });
    } catch (error) {
        res.status(500).json({ message: 'Помилка при видаленні відгуку', error });
    }
};
