import express from 'express';
import {createReview, getReviews, deleteReview, getApprovedReviews} from '../controllers/reviewController';

const router = express.Router();

router.post('/', createReview);

router.get('/', getReviews);

router.get('/?isApproved=true', getApprovedReviews);

router.delete('/:id', deleteReview);

export default router;
