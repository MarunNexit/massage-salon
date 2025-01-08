import React, { useState } from 'react';
import {Drawer, Button, Stack, Group, Text, TextInput, Container} from '@mantine/core';
import {DatePicker, TimeInput} from '@mantine/dates';
import Services from "../services/Services.tsx";
import EnrollTeam from "./team/enrollTeam.tsx";
import {IconArrowLeft} from "@tabler/icons-react";
import '@mantine/dates/styles.css';

interface EnrollDrawerProps {
    opened: boolean;
    onClose: () => void;
    onSubmit?: (data: { service: string; master: string; date: Date | null }) => void;
}

const EnrollDrawer: React.FC<EnrollDrawerProps> = ({ opened, onClose, onSubmit }) => {
    const [isOnline, setIsOnline] = useState(false);
    const [serviceId, setServiceId] = useState<string | null>(null);
    const [masterId, setMasterId] = useState<string | null>(null);
    const [date, setDate] = useState<Date | null>(null);
    const [time, setTime] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [availableTimes, setAvailableTimes] = useState([]);

    const handleEnroll = () => {
        /*if (serviceId && master && date && onSubmit) {
            onSubmit({ serviceId, master, date });
        }
        setServiceId(null);
        setMaster(null);
        setDate(null);
        setIsOnline(false)*/
        handleOnClose();
    };

    const handleOnClose = () => {
        setIsOnline(false)
        setServiceId(null);
        setMasterId(null);
        setDate(null);
        onClose();
    };

    const copyPhoneNumber = () => {
        navigator.clipboard.writeText('+380XXXXXXXXX');
        alert('Номер скопійовано!');
    };

    const onSelectService = (_id: string) => {
        console.log(_id);
        setServiceId(_id);
    };

    const onSelectTeamMember = (_id: string) => {
        console.log(_id);
        setMasterId(_id);
    };

    const onEnrollOnline = () => {
        setIsOnline(true)
    };

    const onReturnBack = () => {
        if(masterId){
            setMasterId(null);
        }
        else if(serviceId) {
            setServiceId(null);
        }
        else if(isOnline) {
            setIsOnline(false);
        }
        else{
            handleOnClose();
        }
    };

    return (
        <Drawer
            opened={opened}
            onClose={handleOnClose}
            position="right"
            padding="md"
            size="lg"
            withOverlay={true}
            withCloseButton={false}
        >
            <Drawer.Header>
                <Button onClick={onReturnBack} style={{ margin: '0 30px 0 0', padding: '0', border: 'none', background: 'none' }}>
                    <IconArrowLeft size={24} color="blue" />
                </Button>
                <Drawer.Title>Записатися</Drawer.Title>
                <Drawer.CloseButton />
            </Drawer.Header>

            {!isOnline ? (
                <section style={{padding:'10px 20px'}}>
                    <Stack style={{ margin: '0 0 4rem 0 '}}>
                        <Text size='sm' style={{ margin: '1rem 0'}}>Зателефонуйте нам</Text>
                        <Group style={{display: 'flex', justifyContent: 'center'}}>
                            <Button
                                component="a"
                                href="tel:+380XXXXXXXXX"
                                variant="light"
                                color="blue"
                            >
                                Зателефонувати
                            </Button>
                            <Button onClick={copyPhoneNumber} variant="light" color="gray">
                                Скопіювати номер телефону
                            </Button>
                        </Group>
                    </Stack>

                    <Stack>
                        <Text size='sm' >Запишіться онлайн</Text>
                        <Group style={{display: 'flex', justifyContent: 'center', margin: '1rem 1rem'}}>
                            <Button
                                variant="light"
                                onClick={() => {onEnrollOnline()}}
                            >
                                Записатися онлайн
                            </Button>
                        </Group>
                    </Stack>
                </section>
            ) : (
                <Stack>
                    {isOnline && !serviceId &&
                        <Services onSelect={onSelectService} isDrawer={true}></Services>
                    }

                    {isOnline && serviceId && !masterId &&(
                        <EnrollTeam onSelect={onSelectTeamMember} service_id={serviceId}></EnrollTeam>
                    )}

                    {isOnline && serviceId && masterId && (
                        <section style={{}}>
                            <TextInput
                                label="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Ваш email"
                                style={{ marginTop: '1rem', width: '100%' }}
                            />
                            <TextInput
                                label="Телефон"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="Ваш номер телефону"
                                style={{ marginTop: '1rem', width: '100%' }}
                            />

                            <section style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                                <DatePicker
                                    value={date}
                                    onChange={setDate}
                                    minDate={new Date()}
                                />
                            </section>

                            {date && (
                                <Button onClick={handleEnroll} color="green" disabled={!date || !masterId || !serviceId} style={{width:'50%', alignSelf: 'center', margin: '1rem'}}>
                                    Записатися
                                </Button>
                            )}

                            {date && (
                                <section style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '1rem' }}>
                                    <TimeInput
                                        value={time}
                                        onChange={setTime}
                                        placeholder="Виберіть час"
                                        data={availableTimes.map((time) => ({ value: time, label: time }))}
                                    />
                                </section>
                            )}

                            {date && time && email && phone && (
                                <Button
                                    onClick={handleEnroll}
                                    color="green"
                                    disabled={!date || !time || !masterId || !serviceId}
                                    style={{ width: '50%', alignSelf: 'center', margin: '1rem' }}
                                >
                                    Записатися
                                </Button>
                            )}
                        </section>
                    )}
                </Stack>
            )}
        </Drawer>

    );
};

export default EnrollDrawer;
