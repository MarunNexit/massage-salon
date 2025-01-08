import express from 'express';
import {
    createSocialLink,
    deleteSocialLink,
    getSocialLink,
    getSocialLinks,
    updateSocialLink
} from "../controllers/socialLinkController";

const router = express.Router();

router.get('/', getSocialLinks);
router.get('/:id', getSocialLink);
router.post('/', createSocialLink);
router.put('/:id', updateSocialLink);
router.delete('/:id', deleteSocialLink);

export default router;
