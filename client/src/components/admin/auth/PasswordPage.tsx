import React, { useState } from 'react';
import {TextInput, Button, Container, Title, Space} from '@mantine/core';

interface PasswordPageProps {
    onAuthenticated: () => void;
}

export const PasswordPage: React.FC<PasswordPageProps> = ({ onAuthenticated }) => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async () => {
        try {
            const response = await fetch('/api/validate-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ password }),
            });

            if (!response.ok) {
                onAuthenticated();
            } else {
                setError('Невірний пароль!');
            }
        } catch {
            setError('Помилка підключення до сервера.');
        }
    };

    return (
        <Container size="xs" style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Title order={2}>Введіть пароль для доступу</Title>
            <Space h="lg" />
            <TextInput
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Пароль"
                size="md"
                error={error}
                styles={{
                    input: {
                        color: 'black',
                    },
                }}
                style={{ marginBottom: '1rem' }}
            />
            <Button onClick={handleSubmit} fullWidth>
                Увійти
            </Button>
        </Container>
    );
};