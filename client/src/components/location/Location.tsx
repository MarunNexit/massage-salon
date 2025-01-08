import {Button, Group, Text, Box, Stack, Title, useMantineTheme} from '@mantine/core';
import {IconPhone, IconMapPin, IconEdit} from '@tabler/icons-react';
import {useSelector} from "react-redux";
import {RootState} from "../../store/store.ts";
import SalonOpen from "../salonOpen/SalonOpen.tsx";
import {useSalonContext} from "../../context/SalonContext.tsx";

const Location = () => {
    const workingHours = useSelector((state: RootState) => state.workingHours);
    const theme = useMantineTheme();

    const currentTime = new Date();
    const ukraineTime = new Date(currentTime.toLocaleString("en-US", { timeZone: "Europe/Kiev" }));
    const currentDay = ukraineTime.toLocaleString('uk-UA', { weekday: 'long' });

    const { salonData, loading, error } = useSalonContext();

    if (loading) {
        return null;
    }

    if (error) {
        console.error(error);
        return null;
    }

    return (
        <Box
            id="locations"
            style={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                borderRadius: '8px',
                overflow: 'hidden',
                margin: '4rem auto',
                flexWrap: 'wrap',
            }}
        >
            <Box style={{ flex: 1,  minWidth: '400px' }} >
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/custom-qr-code.appspot.com/o/salon%2Fsalon_3.jpg?alt=media&token=8ed4a429-228b-43d6-887d-35b117cb3991"
                    alt="Location"
                    style={{ width: '100%', height: '100%', objectFit: 'cover'}}
                />
            </Box>

            <Box
                style={{
                    flex: 1,
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minWidth: '400px',
                    backgroundColor: theme.colors.background[1]
                }}
            >
                <SalonOpen isDetailVersion={true}></SalonOpen>

                <Title size="xl" order={3} style={{ marginTop: '1rem' }}>
                    {salonData.name}
                </Title>
                <Text size="sm" color="dimmed">
                    Адреса: вул. {salonData.address}
                </Text>

                <Text size="sm" color="dimmed" style={{ marginTop: '1rem' }}>
                    {salonData.phone}
                </Text>

                <Stack style={{ marginTop: '1rem', width: '100%', alignItems: 'center' }}>
                    {workingHours.map((workDay: any) => (
                        <Group key={workDay.day} style={{ display: 'flex', justifyContent: 'space-between', width: '80%' }}>
                            <Text size="sm" style={{ fontWeight: currentDay.toLowerCase() === workDay.day.toLowerCase() ? 'bold' : 'normal'}}>{workDay.day}</Text>
                            <Text size="sm" style={{ fontWeight: currentDay.toLowerCase() === workDay.day.toLowerCase() ? 'bold' : 'normal'}}>{workDay.hours}</Text>
                        </Group>
                    ))}
                </Stack>

                <Group style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '4rem' }}>
                    <Group style={{ display: 'flex', justifyContent: 'space-between', width: '80%' }}>
                        <Button variant="outline" style={{width:'100%'}}>
                            <IconEdit size={20} />
                            Записатися
                        </Button>
                        <Button variant="outline" style={{width:'100%'}}>
                            <IconMapPin size={20} />
                            Маршрут
                        </Button>
                        <Button variant="outline" style={{width:'100%'}}>
                            <IconPhone size={20} />
                            Подзвонити
                        </Button>
                    </Group>
                </Group>
            </Box>
        </Box>
    );
};

export default Location;
