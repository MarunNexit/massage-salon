import React from 'react';
import {
    Group,
    Button,
    Text,
    Stack,
    useMantineTheme, useMantineColorScheme, Divider, Box,
} from '@mantine/core';
import MainMenu from "../menu/MainMenu.tsx";
import SalonOpen from "../salonOpen/SalonOpen.tsx";
import './headerMain.css';
import {useSalonContext} from "../../context/SalonContext.tsx";
import EnrollButton from "../enroll/enrollButton.tsx";
import Logo from "../logo/Logo.tsx";



const HeaderAppMain: React.FC = () => {
    const theme = useMantineTheme();
    const { colorScheme, setColorScheme } = useMantineColorScheme();
    const { salonData, loading, error } = useSalonContext();

    if (loading) {
        return null;
    }

    if (error) {
        console.error(error);
        return null;
    }


    return (
        <>
            <div id="headerMain" className={'headerMain'}>
                <Group
                    className="headerMainGroup"
                    mb="md"
                >
                    <Box style={{maxWidth: '100%', margin: 'auto 2rem'}}>
                        <Logo src={salonData.logo} fullVersion={true}></Logo>
                    </Box>

                    <Stack
                        className={'headerStack'}
                    >
                        <Text size="sm" style={{margin: 0, padding: 0}}>
                            Масажний салон
                        </Text>
                        <Text size="xl" style={{margin: 0, padding: 0}}>
                            {salonData.name}
                        </Text>
                        <Group style={{marginTop: '20px', padding: 0}}>
                            <Text size="xs">
                                Адреса: вул. {salonData.address}
                            </Text>
                            <SalonOpen isDetailVersion={false}></SalonOpen>
                        </Group>

                        <EnrollButton></EnrollButton>
                    </Stack>
                </Group>

                <Group mt="md">
                    <Button variant="outline" color={theme.colors.buttons[5]}>
                        {salonData.phone}
                    </Button>

                    {colorScheme === 'light' ? (
                        <Button style={{background: theme.colors.buttons[1], color: theme.colors.buttons[9]}}
                                onClick={() => setColorScheme('dark')}>Dark</Button>
                    ) : (
                        <Button style={{background: theme.colors.buttons[1], color: theme.colors.buttons[9]}}
                                onClick={() => setColorScheme('light')}>Light</Button>
                    )}
                </Group>
            </div>

            <Divider my="sm"/>

            <Group
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: theme.colors.text[9],
                    width: '100%'
                }}
            >
                <MainMenu fullVersion={true}></MainMenu>
            </Group>
        </>
    )
};

export default HeaderAppMain;
