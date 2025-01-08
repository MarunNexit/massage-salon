import { Request, Response } from 'express';
import Appointment from "../models/Appointment";

// Завантаження зображення в галерею
export const createAppointment = async (req: Request, res: Response) => {
    try {
        const { email, phone, serviceId, masterId, dateTime } = req.body;

        const newAppointment = new Appointment({
            email,
            phone,
            serviceId,
            masterId,
            dateTime,
        });

        await newAppointment.save();
        res.status(201).json({ message: 'Запис створено' });
    } catch (error) {
        res.status(500).json({ message: 'Помилка при створенні запису', error });
    }
};

// Отримання всіх зображень
export const getAppointments = async (_req: Request, res: Response) => {
    try {
        const { masterId, date } = req.query;

        const appointments = await Appointment.find({
            masterId,
            dateTime: {
                $gte: new Date(`${date}T00:00:00`),
                $lt: new Date(`${date}T23:59:59`),
            },
        });

        const allTimes = [
            '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00',
        ];

        const bookedTimes = appointments.map((app) => app.dateTime.toISOString().split('T')[1].slice(0, 5));

        const availableTimes = allTimes.filter((time) => !bookedTimes.includes(time));

        res.status(200).json(availableTimes);
    } catch (error) {
        res.status(500).json({ message: 'Помилка при отриманні доступних годин', error });
    }
};

// Видалення зображення
export const deleteAppointment = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await Appointment.findByIdAndDelete(id);
        res.status(200).json({ message: 'Зображення видалено' });
    } catch (error) {
        res.status(500).json({ message: 'Помилка при видаленні зображення', error });
    }
};
