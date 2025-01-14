import React from 'react';
import {Button, TextInput, Group, Stack, Text} from '@mantine/core';
import { DatePicker } from '@mantine/dates';

interface EnrollFormProps {
    availableTimes: string[];
    handleEnroll: () => void;
    onSubmitForm: () => void;
    formData: { email: string; phone: string; date: Date | null; time: string };
    onChange: (field: string, value: string | Date | null) => void;
    serviceName: string;
    masterName: string;
}

const EnrollForm: React.FC<EnrollFormProps> = ({ availableTimes, handleEnroll, onSubmitForm, formData, onChange, serviceName, masterName}) => {
    const isFormValid = formData.email && formData.phone && formData.date && formData.time;

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isFormValid) {
            onSubmitForm();
        }
        else {
            handleEnroll();
        }
    };

    const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        onChange(field, e.target.value);
    };

    return (
        <form onSubmit={onSubmit} style={{ width: '100%' }}>
            <Stack style={{width: '100%', display: 'flex', justifyContent: 'center', padding: '1rem 3rem'}}>
                <Text size="md" mb="md">{serviceName} - {masterName}</Text>
                <TextInput
                    label="Email"
                    value={formData.email}
                    onChange={handleInputChange('email')}
                    placeholder="Ваш email"
                    required
                    style={{width: '100%'}}
                />

                <TextInput
                    label="Телефон"
                    value={formData.phone}
                    onChange={handleInputChange('phone')}
                    placeholder="Ваш номер телефону"
                    required
                    style={{width: '100%'}}
                />

                <div style={{width: '100%', display: 'flex', justifyContent: 'center', padding: '1rem 3rem'}}>
                    <DatePicker
                        value={formData.date}
                        onChange={(date) => onChange('date', date)}
                        minDate={new Date()}
                    />
                </div>


                {formData.date && availableTimes.length > 0 && (
                    <div>
                        <label htmlFor="time-select">Оберіть час: </label>
                        <select id="time-select"
                                value={formData.time || ''}
                                onChange={handleInputChange('time')}
                                required
                                style={{fontSize: '18px'}}
                        >
                            {availableTimes.map((time, index) => (
                                <option key={index} value={time}>
                                    {time}
                                </option>
                            ))}
                        </select>
                    </div>
                )}

                {formData.date && availableTimes.length == 0 && (
                    <Text size="sm" >
                        Майстер не працює в цей день або Немає вільних годин.
                    </Text>
                )}

                <Group mt="md">
                    <Button
                        type="submit"
                        color="green"
                        disabled={!isFormValid}
                        style={{width: '100%'}}
                    >
                        Записатися
                    </Button>
                </Group>
            </Stack>
        </form>
    );
};

export default EnrollForm;
