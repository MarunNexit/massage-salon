import React from 'react';
import { Container, Grid, Text, Title} from '@mantine/core';
import SocialMedia from "./SocialMedia.tsx";
import {useSalonContext} from "../../context/SalonContext.tsx";

const AboutUs: React.FC = () => {
    const { salonData, loading, error } = useSalonContext();

    if (loading) {
        return null;
    }

    if (error) {
        console.error(error);
        return null;
    }

    return (
        <Container id="aboutUs" size="xl" style={{ marginTop: '6rem', textAlign: 'start', paddingTop: '2rem' }}>
            <Grid>
                <Grid.Col span={9} >
                    <Title size="xl" order={2} style={{ marginBottom: '1rem' }}>
                        Про нас
                    </Title>
                    <Text size="md" style={{ float: 'left' }}>
                        {salonData.description}
                    </Text>
                </Grid.Col>

                <Grid.Col span={3} style={{minWidth:'300px', margin: '20px 0'}}>
                    <SocialMedia></SocialMedia>
                </Grid.Col>
            </Grid>
        </Container>
    );
};

export default AboutUs;
