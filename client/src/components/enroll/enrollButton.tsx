import React, {useState} from 'react';
import EnrollDrawer from "./enrollDrawer.tsx";
import {Button} from "@mantine/core";



const EnrollButton: React.FC<any> = ({outline = true, full = true}: any) => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const handleSubscribe = (email: string) => {
        console.log(`Subscribed with email: ${email}`);
    };

    return (
        <>
            <Button style={{width: 'fit-content', margin: 'auto 1rem 0 0 ', minWidth: 'fit-content'}} variant={outline ? "outline" : 'light'} color="blue" fullWidth onClick={() => setDrawerOpen(true)}>
                {full ? 'Записатися онлайн' : 'Записатися'}
            </Button>

            <EnrollDrawer
                opened={isDrawerOpen}
                onClose={() => setDrawerOpen(false)}
                onSubmit={handleSubscribe}
                drawerTitle="Приєднайтеся до нашої спільноти"
            />
        </>
    );
};

export default EnrollButton;
