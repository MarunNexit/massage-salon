import express from 'express';
import {createSalon, getSalon, getSalonModified, updateSalon} from '../controllers/salonController';

const router = express.Router();

router.post('/', createSalon);

router.put('/', updateSalon);

router.get('/', getSalon);

router.get('/modified', getSalonModified);

export default router;
