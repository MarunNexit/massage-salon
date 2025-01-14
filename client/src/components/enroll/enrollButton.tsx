import React, {useState} from 'react';
import EnrollDrawer from "./enrollDrawer.tsx";
import {Button} from "@mantine/core";
import {IconEdit} from "@tabler/icons-react";
import {showNotification} from "../notifications/notification.ts";



const EnrollButton: React.FC<any> = ({outline = true, full = true, service = null, icon = false, fullWidth = false}: any) => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const handleSubmit = async () => {
        try {
            setDrawerOpen(false);
            showNotification({
                title: 'Запис створено',
                message: 'Очікуйте дзвінка для уточнення даних',
                color: 'green',
                autoClose: 5000,
            });
        } catch (error) {
            showNotification({
                title: 'Помилка',
                message: 'Щось пішло не так. Спробуйте знову.',
                color: 'red',
                autoClose: 5000,
            });
        }
    };

    return (
        <>
            <Button style={{width: fullWidth ? '100%' : 'fit-content', margin: '0 0 0 0 ', minWidth: 'fit-content'}} variant={outline ? "outline" : 'light'} color="blue" fullWidth onClick={() => setDrawerOpen(true)}>
                {icon && <IconEdit size={20} />}
                {full ? 'Записатися онлайн' : 'Записатися'}
            </Button>

            <EnrollDrawer
                opened={isDrawerOpen}
                onClose={() => setDrawerOpen(false)}
                onSubmit={handleSubmit}
                selectedService={service}
            />
        </>
    );
};

export default EnrollButton;
