import React from 'react';
import { Tabs, Container } from '@mantine/core';
import SalonInfoAdmin from './salonInfo/salonInfoAdmin.tsx';
import SocialLinksAdmin from './socialLinks/SocialLinksAdmin.tsx';
import ServicesAdmin from './services/ServicesAdmin.tsx';
import GalleryAdmin from './gallery/GalleryAdmin.tsx';
import TeamAdmin from './team/TeamAdmin.tsx';
import ReviewsAdmin from './reviews/ReviewsAdmin.tsx';

export const AdminDashboard: React.FC<any> = ({activeTab}) => {
    return (
        <Container style={{ marginTop: '2rem' }}>
            <Tabs value={activeTab}>
                <Container style={{ margin: '2rem' }}>
                    <Tabs.Panel value="salon">
                        <SalonInfoAdmin />
                    </Tabs.Panel>
                    <Tabs.Panel value="social">
                        <SocialLinksAdmin />
                    </Tabs.Panel>
                    <Tabs.Panel value="services">
                        <ServicesAdmin />
                    </Tabs.Panel>
                    <Tabs.Panel value="gallery">
                        <GalleryAdmin />
                    </Tabs.Panel>
                    <Tabs.Panel value="team">
                        <TeamAdmin />
                    </Tabs.Panel>
                    <Tabs.Panel value="reviews">
                        <ReviewsAdmin />
                    </Tabs.Panel>
                </Container>
            </Tabs>
        </Container>
    );
};