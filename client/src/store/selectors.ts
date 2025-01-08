import { createSelector } from 'reselect';
import { RootState } from './store';
import {useSalonContext} from "../context/SalonContext.tsx"; // Замініть шлях на правильний для вашого проєкту

export const selectWorkingHours = (state: RootState) => state.workingHours;

export const selectIsOpenNow = createSelector(
    [selectWorkingHours],
    (workingHours) => {
        const { salonData } = useSalonContext();

        if (salonData.closureReason !== '' || salonData.closureReason == null) {
            return { isOpen: false, closureReason: salonData.closureReason };
        }

        const currentTime = new Date();
        const ukraineTime = new Date(currentTime.toLocaleString("en-US", { timeZone: "Europe/Kiev" }));
        const currentDay = ukraineTime.toLocaleString('uk-UA', { weekday: 'long' });
        const currentHour = ukraineTime.getHours();
        const currentMinute = ukraineTime.getMinutes();

        const todaySchedule = workingHours.find(schedule =>
            schedule.day.toLowerCase() === currentDay.toLowerCase()
        );

        if (todaySchedule && todaySchedule.hours !== 'Закрито') {
            const [start, end] = todaySchedule.hours.split(' - ').map(time => {
                const [hours, minutes] = time.split(':').map(Number);
                return { hours, minutes };
            });

            if ((currentHour > start.hours || (currentHour === start.hours && currentMinute >= start.minutes)) &&
                (currentHour < end.hours || (currentHour === end.hours && currentMinute < end.minutes))) {
                return { isOpen: true, closureReason: '' };
            }
        }

        return { isOpen: false, closureReason: '' };
    }
);
