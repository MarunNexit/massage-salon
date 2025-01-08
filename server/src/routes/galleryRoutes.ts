import express from 'express';
import { uploadImage, getGallery, deleteImage } from '../controllers/galleryController';

const router = express.Router();

router.post('/', uploadImage);

router.get('/', getGallery);

router.delete('/:id', deleteImage);

export default router;
