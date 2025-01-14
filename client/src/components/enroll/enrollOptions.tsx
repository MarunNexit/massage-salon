import React from 'react';
import { Button, Group, Stack, Text } from '@mantine/core';

interface EnrollOptionsProps {
    copyPhoneNumber: () => void;
    onEnrollOnline: () => void;
}

const EnrollOptions: React.FC<EnrollOptionsProps> = ({ copyPhoneNumber, onEnrollOnline }) => {
    return (
        <section style={{ padding: '10px 20px' }}>
            <Stack style={{ margin: '0 0 4rem 0' }}>
                <Text size="sm" style={{ margin: '1rem 0' }}>Зателефонуйте нам</Text>
                <Group style={{ display: 'flex', justifyContent: 'center' }}>
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
                <Text size="sm">Запишіться онлайн</Text>
                <Group style={{ display: 'flex', justifyContent: 'center', margin: '1rem 1rem' }}>
                    <Button
                        variant="light"
                        onClick={onEnrollOnline}
                    >
                        Записатися онлайн
                    </Button>
                </Group>
            </Stack>
        </section>
    );
};

export default EnrollOptions;
