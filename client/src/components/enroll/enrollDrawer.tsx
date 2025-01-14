import React, {useEffect, useState} from 'react';
import {Drawer, Button, Stack} from '@mantine/core';
import Services from "../services/Services.tsx";
import EnrollTeam from "./team/enrollTeam.tsx";
import {IconArrowLeft} from "@tabler/icons-react";
import '@mantine/dates/styles.css';
import EnrollOptions from "./enrollOptions.tsx";
import EnrollForm from "./enrollForm.tsx";
import {createAppointment, getAvailableMasterHours} from "../../api/appointment.ts";
import {AppointmentCreateData} from "../../models/appointment.ts";

interface EnrollDrawerProps {
    opened: boolean;
    onClose: () => void;
    onSubmit?: () => void;
    selectedService: any;
}

const EnrollDrawer: React.FC<EnrollDrawerProps> = ({ opened, onClose, onSubmit, selectedService = null}) => {
    const [isOnline, setIsOnline] = useState(!!(selectedService && selectedService._id && selectedService.name));
    const [serviceId, setServiceId] = useState<string | null>(selectedService && selectedService._id && selectedService.name ? selectedService._id : null);
    const [serviceName, setServiceName] = useState<string | null>(selectedService && selectedService._id && selectedService.name ? selectedService.name : null);
    const [masterId, setMasterId] = useState<string | null>(null);
    const [masterName, setMasterName] = useState<string | null>(null);
    const [availableTimes, setAvailableTimes] = useState([]);

    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        date: null,
        time: ''
    });

    useEffect(() => {
        const fetchAvailableTimes = async () => {
            try {
                const availableTimes = await getAvailableMasterHours(masterId, formData.date);
                if(availableTimes && availableTimes.availableSlots != null){
                    setAvailableTimes(availableTimes.availableSlots);
                }
                else {
                    setAvailableTimes([]);
                }
            } catch (error) {
                console.error('Error fetching available times:', error);
            }
        };

        if(masterId && formData.date != null){
            fetchAvailableTimes();
        }
    }, [formData.date, masterId]);

    const handleFormChange = (field: string, value: any) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleEnroll = () => {
        handleOnClose();
    };

    const handleOnClose = () => {
        if(!(selectedService && selectedService._id && selectedService.name)){
            setIsOnline(false)
            setServiceId(null);
            setServiceName(null);
        }
        setMasterId(null);
        setMasterName(null);
        setFormData(
            {
                email: '',
                phone: '',
                date: null,
                time: ''
            }
        );
        console.log(selectedService)
        onClose();
    };

    const onSubmitForm = () => {
        if(serviceId && masterId && formData && onSubmit){
            const handleSubmit = async (data: AppointmentCreateData) => {
                const response = await createAppointment(data)
                if(response){
                    onSubmit()
                }
            };

            handleSubmit({
                email: formData.email,
                phone: formData.phone,
                serviceId: serviceId,
                masterId: masterId,
                date: formData.date,
                time: formData.time,
            });
        }
    };

    const copyPhoneNumber = () => {
        navigator.clipboard.writeText('+380XXXXXXXXX');
        alert('Номер скопійовано!');
    };

    const onSelectService = (_id: string, name: string) => {
        console.log(_id);
        setServiceId(_id);
        setServiceName(name)
    };

    const onSelectTeamMember = (_id: string, name: string) => {
        console.log(_id);
        setMasterId(_id);
        setMasterName(name);
    };

    const onEnrollOnline = () => {
        setIsOnline(true)
    };

    const onReturnBack = () => {
        if(masterId){
            setMasterId(null);
            setMasterName(null)
            setAvailableTimes([]);
        }
        else if(serviceId) {
            if(!(selectedService && selectedService._id && selectedService.name)){
                setServiceId(null);
                setServiceName(null)
            }
            else {
                handleOnClose();
            }
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
                <EnrollOptions onEnrollOnline={onEnrollOnline} copyPhoneNumber={copyPhoneNumber}></EnrollOptions>
            ) : (
                <Stack>
                    {isOnline && !serviceId &&
                        <Services onSelect={onSelectService} isDrawer={true}></Services>
                    }

                    {isOnline && serviceId && !masterId &&(
                        <EnrollTeam onSelect={onSelectTeamMember} service_id={serviceId} service_name={serviceName}></EnrollTeam>
                    )}

                    {isOnline && serviceId && serviceName && masterId && masterName && (
                        <EnrollForm availableTimes={availableTimes} handleEnroll={handleEnroll} onSubmitForm={onSubmitForm} formData={formData} onChange={handleFormChange} serviceName={serviceName} masterName={masterName} />
                    )}
                </Stack>
            )}
        </Drawer>

    );
};

export default EnrollDrawer;
