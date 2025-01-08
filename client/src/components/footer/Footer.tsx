import React from 'react';
import {Container, Grid, Text, useMantineTheme} from '@mantine/core';
import MainMenu from "../menu/MainMenu.tsx";
import SocialMediaList from "../aboutus/SocialMediaList.tsx";
import {useSalonContext} from "../../context/SalonContext.tsx";
import Logo from "../logo/Logo.tsx";

const Footer: React.FC = () => {
    const theme = useMantineTheme();
    const {salonData, loading, error} = useSalonContext();

    if (loading) {
        return null;
    }

    if (error) {
        console.error(error);
        return null;
    }

    return (
        <footer id="footer" style={{width: '100%', backgroundColor: theme.colors.background[1], padding: '20px 0'}}>
            <Container size='xl'>
                <Grid>
                    <Grid.Col span={3} style={{display: 'flex', justifyContent: 'center'}}>
                        <Logo src={salonData.logo} />
                    </Grid.Col>

                    <Grid.Col span={3} style={{display: 'flex', justifyContent: 'center'}}>
                        <section style={{display: 'flex', flexDirection: 'column'}}>
                            <MainMenu fullVersion={true}></MainMenu>
                        </section>
                    </Grid.Col>

                    <Grid.Col span={3} style={{display: 'flex', justifyContent: 'center'}}>
                        <Text size="lg">{salonData.phone}</Text>
                    </Grid.Col>

                    <Grid.Col span={3} style={{display: 'flex', justifyContent: 'center'}}>
                        <SocialMediaList/>
                    </Grid.Col>
                </Grid>
            </Container>
        </footer>
    );
}

export default Footer;
