import React, { useState, useEffect } from 'react';
import {
    Button,
    Burger,
    Drawer,
    Text,
    Stack,
    useMantineTheme,
    useMantineColorScheme, Container,
} from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import { useMediaQuery } from '@mantine/hooks';
import MainMenu from "../menu/MainMenu.tsx";
import './header.css';
import {useSalonContext} from "../../context/SalonContext.tsx";
import Logo from "../logo/Logo.tsx";
import EnrollButton from "../enroll/enrollButton.tsx";



const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [drawerOpened, setDrawerOpened] = useState(false);
    const [scroll] = useWindowScroll();
    const isMobile = useMediaQuery('(max-width: 768px)');
    const theme = useMantineTheme();
    const { colorScheme, setColorScheme } = useMantineColorScheme();
    const { salonData, loading, error } = useSalonContext();

    useEffect(() => {
        if (scroll.y > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }, [scroll]);


    if (loading) {
        return null;
    }

    if (error) {
        console.error(error);
        return null;
    }


    return (
        <>
        { scrolled ? (
            <div
                className='header'
                style={{
                    backgroundColor: theme.colors.background[1],
                    boxShadow: scrolled ? '0px 4px 12px rgba(0, 0, 0, 0.1)' : 'none',
                }}
            >
                <Container
                    size='xl'
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%',
                    }}
                >
                    <Logo src={salonData.logo} />

                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            color: theme.colors.text[9],
                        }}
                    >
                        {!isMobile ? (
                            <>
                                <MainMenu></MainMenu>
                            </>
                        ) : (
                            <Burger
                                opened={drawerOpened}
                                onClick={() => setDrawerOpened((o) => !o)}
                                style={{marginRight: 20}}
                            />
                        )}

                    </div>

                    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent:'flex-end', width: '20%'}}>

                        {/*<Button style={{background: theme.colors.buttons[1], color: theme.colors.buttons[9]}}
                                variant="outline">Кнопка Кнопка</Button>*/}
                        <EnrollButton outline={true} full={false}></EnrollButton>

                        {colorScheme === 'light' ? (
                            <Button style={{background: theme.colors.buttons[1], color: theme.colors.buttons[9]}}
                                    onClick={() => setColorScheme('dark')}>Dark</Button>
                        ) : (
                            <Button style={{background: theme.colors.buttons[1], color: theme.colors.buttons[9]}}
                                    onClick={() => setColorScheme('light')}>Light</Button>
                        )}
                    </div>

                </Container>

                {isMobile && (
                    <Drawer
                        opened={drawerOpened}
                        onClose={() => setDrawerOpened(false)}
                        title="Меню"
                        position="right"
                        padding="xl"
                    >
                        <Stack>
                            <Text>Відгуки</Text>
                            <Text>Локації</Text>
                            <Text>Питання</Text>
                        </Stack>
                    </Drawer>
                )}
            </div>
        ) : null
        }
        </>
    )
};

export default Header;
