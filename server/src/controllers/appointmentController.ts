import { Request, Response } from 'express';
import Appointment from "../models/Appointment";
import Team from "../models/Team";
import WorkingHours from "../models/WorkingHours";

export const createAppointment = async (req: Request, res: Response) => {
    try {
        const { email, phone, serviceId, masterId, date, time } = req.body;
        const dateOnly = new Date(date).toISOString().split('T')[0];
        const dateTimeString = `${dateOnly}T${time}:00`;

        const dateTime = new Date(dateTimeString);

        if (isNaN(dateTime.getTime())) {
            res.status(400).json({ message: 'Невірний формат дати чи часу' });
        }
        else {
            const newAppointment = new Appointment({
                email,
                phone,
                serviceId,
                masterId,
                dateTime,
            });

            await newAppointment.save();

            res.status(201).json({ message: 'Запис створено' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Помилка при створенні запису', error });
    }
};



export const getAvailableHoursSpecificDay = async (req: Request, res: Response) => {
    try {
        const { masterId, date } = req.query;

        if(date){
            const daysOfWeek = [
                'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пʼятниця', 'Субота'
            ];
            const dayOfWeek = daysOfWeek[new Date(date.toString()).getDay()];

            const master = await Team.findById(masterId).populate('workingDays');

            if (!master) {
                res.status(400).json({ message: `Майстра не знайдено` });
            }
            else {
                const workingDays = master.workingDays.map((workingDay) => workingDay._id);

                const workingHours = await WorkingHours.find({ '_id': { $in: workingDays } });

                const workingHourForDay = workingHours.find((wh) => wh.day === dayOfWeek);
                if (!workingHourForDay) {
                    res.status(400).json({ message: `Майстер не працює в цей день (${dayOfWeek})` });
                }
                else {
                    const [startTime, endTime] = workingHourForDay.hours.split(' - ').map((time) => {
                        const [hours, minutes] = time.split(':').map(Number);
                        return hours + minutes / 60;
                    });

                    const availableHours = [];
                    for (let hour = startTime; hour <= endTime; hour += 1) {
                        availableHours.push(`${Math.floor(hour)}:${(hour % 1 === 0 ? '00' : '30')}`);
                    }

                    const unavailableHours = await Appointment.find({
                        masterId,
                        dateTime: { $gte: new Date(`${date}T00:00:00`), $lt: new Date(`${date}T23:59:59`) },
                    }).select('dateTime');

                    const unavailableTimes = unavailableHours.map((appointment) => {
                        const appointmentHour = new Date(appointment.dateTime).getHours();
                        const appointmentMinute = new Date(appointment.dateTime).getMinutes();
                        return `${appointmentHour}:${appointmentMinute === 0 ? '00' : '30'}`;
                    });

                    const availableSlots = availableHours.filter((hour) => !unavailableTimes.includes(hour));

                    res.status(200).json({ availableSlots });
                }
            }
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Помилка при створенні запису', error });
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
