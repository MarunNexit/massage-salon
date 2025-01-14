import React, { useState, useEffect } from 'react';
import { TextInput, Button, NumberInput, Stack, Title, Group } from '@mantine/core';

const ServicesAdmin: React.FC = () => {
    const [services, setServices] = useState<{ name: string; price: number }[]>([]);

    useEffect(() => {
        fetch('/api/services')
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);

    const handleAddService = () => {
        setServices([...services, { name: '', price: 0 }]);
    };

    const handleSave = () => {
        fetch('/api/services', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(services),
        }).then(() => alert('Services updated!'));
    };

    return (
        <Stack>
            <Title order={2}>Services</Title>
            {services.map((service, index) => (
                <Group key={index}>
                    <TextInput
                        label="Service Name"
                        value={service.name}
                        onChange={(e) =>
                            setServices(
                                services.map((s, i) => (i === index ? { ...s, name: e.target.value } : s))
                            )
                        }
                    />
                    <NumberInput
                        label="Price"
                        value={service.price}
                        onChange={(value) =>
                            setServices(
                                services.map((s, i) =>
                                    i === index ? { ...s, price: Number(value) || 0 } : s
                                )
                            )
                        }
                    />
                </Group>
            ))}
            <Button variant="outline" onClick={handleAddService}>
                Add Service
            </Button>
            <Button onClick={handleSave}>Save</Button>
        </Stack>
    );
};

export default ServicesAdmin;
