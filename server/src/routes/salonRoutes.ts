import express from 'express';
import {createSalon, getSalon, getSalonModified, updateSalon} from '../controllers/salonController';

const router = express.Router();

router.post('/', createSalon);

router.get('/', getSalon);

router.get('/modified', getSalonModified);

router.put('/:id', updateSalon);

export default router;
