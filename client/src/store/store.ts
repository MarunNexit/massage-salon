// redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import workingHoursReducer from './workingHoursSlice';

export interface WorkingHoursState {
    day: string;
    hours: string;
}

const store = configureStore({
    reducer: {
        workingHours: workingHoursReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;