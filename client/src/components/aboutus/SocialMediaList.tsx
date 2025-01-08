import React, { useEffect, useState } from 'react';
import { List, ThemeIcon, Anchor } from '@mantine/core';
import {
    IconBrandInstagram,
    IconBrandTelegram,
    IconPhone,
    IconBrandWhatsapp,
    IconBrandFacebook
} from '@tabler/icons-react';
import {getSocialLinks} from "../../api/socialLink.ts";
import {ISocialLink} from "../../models/socialLink.ts";


const SocialMediaList: React.FC = () => {
    const [socialLinks, setSocialLinks] = useState<ISocialLink[]>([]);

    useEffect(() => {
        const fetchSocialLinks = async () => {
            try {
                const response = await getSocialLinks();
                setSocialLinks(response);
            } catch (error) {
                console.error('Error fetching social links:', error);
            }
        };

        fetchSocialLinks();
    }, []);

    const getIcon = (platform: string) => {
        switch (platform.toLowerCase()) {
            case 'instagram':
                return <IconBrandInstagram size={20} />;
            case 'telegram':
                return <IconBrandTelegram size={20} />;
            case 'facebook':
                return <IconBrandFacebook size={20} />;
            case 'viber':
                return <IconPhone size={20} />;
            case 'whatsapp':
                return <IconBrandWhatsapp size={20} />;
            default:
                return null;
        }
    };

    return (
        <List spacing="sm" icon={null}>
            {socialLinks.map((link, index) => (
                <List.Item
                    key={index}
                    icon={
                        <ThemeIcon color="blue" variant="light" radius="xl">
                            {getIcon(link.platform)}
                        </ThemeIcon>
                    }
                >
                    <Anchor
                        href={link.url}
                        target="_blank"
                        style={{ textDecoration: 'none', color: 'inherit' }}
                        size="md"
                    >
                        {link.platform}
                    </Anchor>
                </List.Item>
            ))}
        </List>
    );
};

export default SocialMediaList;


