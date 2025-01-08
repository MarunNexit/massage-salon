import express from 'express';
import { getWorkingHours, updateWorkingHours } from '../controllers/workingHoursController';

const router = express.Router();

/*// Додати робочі години
router.post('/', createWorkingHours);*/

router.get('/', getWorkingHours);

router.put('/:id', updateWorkingHours);

export default router;
