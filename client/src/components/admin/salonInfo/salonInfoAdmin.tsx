import React, { useState, useEffect } from 'react';
import {TextInput, Textarea, Button, Stack, Title, Select} from '@mantine/core';
import {useSalonContext} from "../../../context/SalonContext.tsx";
import {uploadLogoToFirebase} from "../../../utils/firebaseStorage.ts";

const SalonInfoAdmin: React.FC = () => {
    const [salonName, setSalonName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [logo, setLogo] = useState<string | undefined>('');
    const {salonData, updateSalonData} = useSalonContext();
    const [closureReason, setClosureReason] = useState<string | null | undefined>('');

/*
    if (loading) {
        return null;
    }

    if (error) {
        console.error(error);
        return null;
    }*/


    useEffect(() => {
        resetChanges()
    }, []);

    const resetChanges = () => {
        setSalonName(salonData.name);
        setDescription(salonData.description);
        setAddress(salonData.address);
        setPhone(salonData.phone);
        setLogo(salonData.logo);
        setClosureReason(salonData.closureReason);
    };

    const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            uploadLogoToFirebase(file).then((downloadURL) => {
                setLogo(downloadURL);
                console.log(downloadURL);
            });
        }
    };

    const handleUpdate = () => {
        const updatedAt = new Date();
        const updatedSalon = { name: salonName, description: description, address: address, phone: phone, logo: logo, updatedAt: updatedAt };
        updateSalonData(updatedSalon);
    };

    return (
        <Stack>
            <Title order={2}>Інформація щодо салону</Title>
            <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '20%',
                    justifyContent: 'center',
                    marginBottom: '1rem',
                    minWidth: '250px'
                }}>
                    <div
                        style={{
                            width: '250px',
                            height: '250px',
                            border: '2px solid #ddd',
                            borderRadius: '8px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            overflow: 'hidden',
                            margin: '1rem'
                        }}
                        onClick={() => document.getElementById('logo-input')?.click()}
                    >
                        {logo ?
                            <img src={logo} alt="Logo Preview"
                                 style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
                            :
                            <span>Додати лого</span>
                        }
                    </div>
                    <input
                        type="file"
                        id="logo-input"
                        accept="image/*"
                        onChange={handleLogoChange}
                        style={{display: 'none'}}
                    />
                </div>

                <div style={{
                    width: '60%', textAlign: 'start', marginBottom: '1rem',
                    minWidth: '300px'
                }}>
                    <TextInput
                        label="Назва салону"
                        value={salonName}
                        onChange={(e) => setSalonName(e.target.value)}
                        style={{marginBottom: '12px'}}
                        styles={{ input: { color: 'black' } }}
                    />
                    <Textarea
                        label="Опис"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        autosize
                        minRows={4}
                        style={{marginBottom: '12px'}}
                        styles={{ input: { color: 'black' } }}
                    />
                    <TextInput
                        label="Адреса"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        style={{marginBottom: '12px'}}
                        styles={{ input: { color: 'black' } }}
                    />
                    <TextInput
                        label="Номер телефону"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        style={{marginBottom: '12px'}}
                        styles={{ input: { color: 'black' } }}
                    />
                    <Stack>
                        <Select
                            label="Примусово зачинити салон"
                            value={closureReason}
                            onChange={setClosureReason}
                            data={[
                                {value: '', label: 'Відчинити'},
                                {value: 'maintenance', label: 'Технічні роботи'},
                                {value: 'emergency', label: 'Надзвичайна ситуація'},
                            ]}
                            style={{marginBottom: '12px'}}
                            styles={{ input: { color: 'black' } }}
                        />
                        <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '20px'}}>
                            <Button color="red" onClick={resetChanges}>Скинути зміни</Button>
                            <Button onClick={handleUpdate}>Оновити</Button>
                        </div>
                    </Stack>
                </div>
            </div>


        </Stack>
    );
};

export default SalonInfoAdmin;
