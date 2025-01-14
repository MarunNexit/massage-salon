import express from 'express';
import {
    createAppointment,
    getAvailableHoursSpecificDay
} from "../controllers/appointmentController";

const router = express.Router();

router.post('/', createAppointment);

router.get('/hours', getAvailableHoursSpecificDay);

export default router;
