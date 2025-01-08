import React from 'react';
import { Title, Box, useMantineTheme } from '@mantine/core';
import SocialMediaList from "./SocialMediaList.tsx";

const SocialMedia: React.FC = () => {
    const theme = useMantineTheme();

    return (
        <Box
            style={{
                padding: '1.5rem',
                borderRadius: '8px',
                backgroundColor: theme.colors.background[1],
                color: theme.colors.text[9],
                minWidth: '200px',
            }}
        >
            <Title size="md" order={4} style={{ marginBottom: '1rem' }}>
                Соціальні мережі
            </Title>
            <SocialMediaList></SocialMediaList>
        </Box>
    );
};

export default SocialMedia;
