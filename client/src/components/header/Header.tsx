import React, { useState, useEffect } from 'react';
import {
    Button,
    Burger,
    Drawer,
    useMantineTheme,
    useMantineColorScheme, Container, Tabs,
} from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import { useMediaQuery } from '@mantine/hooks';
import MainMenu from "../menu/MainMenu.tsx";
import './header.css';
import {useSalonContext} from "../../context/SalonContext.tsx";
import Logo from "../logo/Logo.tsx";
import EnrollButton from "../enroll/enrollButton.tsx";



const Header: React.FC<any> = ({isAdmin = false, setActiveTab}) => {
    const [scrolled, setScrolled] = useState(false);
    const [drawerOpened, setDrawerOpened] = useState(false);
    const [scroll] = useWindowScroll();
    const isMobile = useMediaQuery('(max-width: 768px)');
    const theme = useMantineTheme();
    const { colorScheme, setColorScheme } = useMantineColorScheme();
    const { salonData } = useSalonContext();

    useEffect(() => {
        if (scroll.y > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }, [scroll]);


    return (
        <>
        { scrolled || isAdmin ? (
            <div
                className= {isAdmin ? 'header-admin' : 'header'}
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
                    <Logo src={salonData ? salonData.logo : "https://via.placeholder.com/150"} />

                    {isAdmin &&
                        <div>
                            {!isMobile ? (
                                <Tabs onChange={setActiveTab}>
                                    <Tabs.List style={{display: 'flex', justifyContent: 'space-between'}}>
                                        <Tabs.Tab value="salon">Інформація про салон</Tabs.Tab>
                                        <Tabs.Tab value="social">Соцмережі та години роботи</Tabs.Tab>
                                        <Tabs.Tab value="services">Сервіси</Tabs.Tab>
                                        <Tabs.Tab value="gallery">Галерея</Tabs.Tab>
                                        <Tabs.Tab value="team">Персонал</Tabs.Tab>
                                        <Tabs.Tab value="reviews">Відгуки</Tabs.Tab>
                                    </Tabs.List>
                                </Tabs>
                            ) : (
                                <Burger
                                    opened={drawerOpened}
                                    onClick={() => setDrawerOpened((o) => !o)}
                                />
                            )}
                        </div>
                    }

                    {!isAdmin &&
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
                    }

                    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-end'}}>
                        {!isAdmin &&
                            <EnrollButton outline={true} full={false}></EnrollButton>
                        }

                        {colorScheme === 'light' ? (
                            <Button style={{
                                background: theme.colors.buttons[1],
                                color: theme.colors.buttons[9],
                                margin: '0 0 0 1rem'
                            }}
                                    onClick={() => setColorScheme('dark')}>Dark</Button>
                        ) : (
                            <Button style={{
                                background: theme.colors.buttons[1],
                                color: theme.colors.buttons[9],
                                margin: '0 0 0 1rem'
                            }}
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
                        {isAdmin ?
                            <Tabs onChange={setActiveTab}>
                                <Tabs.List style={{display: 'flex', flexDirection: 'column'}}>
                                    <Tabs.Tab value="salon">Інформація про салон</Tabs.Tab>
                                    <Tabs.Tab value="social">Соцмережі та години роботи</Tabs.Tab>
                                    <Tabs.Tab value="services">Сервіси</Tabs.Tab>
                                    <Tabs.Tab value="gallery">Галерея</Tabs.Tab>
                                    <Tabs.Tab value="team">Персонал</Tabs.Tab>
                                    <Tabs.Tab value="reviews">Відгуки</Tabs.Tab>
                                </Tabs.List>
                            </Tabs>
                            :
                            <MainMenu fullVersion={true} isDrawer={true}></MainMenu>
                        }
                    </Drawer>
                )}
            </div>
        ) : null
        }
        </>
    )
};

export default Header;
