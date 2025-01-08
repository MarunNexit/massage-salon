// /src/controllers/socialLinkController.ts
import { Request, Response } from 'express';
import SocialLink from "../models/SocialLink";


// Отримати всі соціальні посилання
export const getSocialLinks = async (req: Request, res: Response) => {
    try {
        const socialLinks = await SocialLink.find();
        res.json(socialLinks);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching social links' });
    }
};

// Отримати соціальне посилання по ID
export const getSocialLink = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const socialLink = await SocialLink.findById(id);
        if (!socialLink) {
            res.status(404).json({ message: 'Social link not found' });
        }
        res.json(socialLink);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching social link' });
    }
};

// Створити нове соціальне посилання
export const createSocialLink = async (req: Request, res: Response) => {
    const { platform, url } = req.body;
    try {
        const newSocialLink = new SocialLink({ platform, url });
        await newSocialLink.save();
        res.status(201).json(newSocialLink);
    } catch (error) {
        res.status(500).json({ message: 'Error creating social link' });
    }
};

// Оновити соціальне посилання
export const updateSocialLink = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { platform, url } = req.body;
    try {
        const updatedSocialLink = await SocialLink.findByIdAndUpdate(
            id,
            { platform, url },
            { new: true }
        );
        if (!updatedSocialLink) {
            res.status(404).json({ message: 'Social link not found' });
        }
        res.json(updatedSocialLink);
    } catch (error) {
        res.status(500).json({ message: 'Error updating social link' });
    }
};

// Видалити соціальне посилання
export const deleteSocialLink = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const deletedSocialLink = await SocialLink.findByIdAndDelete(id);
        if (!deletedSocialLink) {
            res.status(404).json({ message: 'Social link not found' });
        }
        res.json({ message: 'Social link deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting social link' });
    }
};
