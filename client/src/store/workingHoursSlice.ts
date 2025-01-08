import { createSlice } from '@reduxjs/toolkit';
import { WorkingHoursState } from './store';

const initialState: WorkingHoursState[] = [
        { day: 'Понеділок', hours: '9:00 - 18:00' },
        { day: 'Вівторок', hours: '9:00 - 18:00' },
        { day: 'Середа', hours: '9:00 - 18:00' },
        { day: 'Четвер', hours: '9:00 - 18:00' },
        { day: 'Пʼятниця', hours: '9:00 - 18:00' },
        { day: 'Субота', hours: '10:00 - 16:00' },
        { day: 'Неділя', hours: 'Закрито' },
    ];


const workingHoursSlice = createSlice({
    name: 'workingHours',
    initialState,
    reducers: {
    },

});

export default workingHoursSlice.reducer;
