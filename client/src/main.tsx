import { createRoot } from 'react-dom/client';
import './index.css';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import App from './App';
import {
    localStorageColorSchemeManager,
    MantineProvider,
} from '@mantine/core';
import {Provider} from "react-redux";
import store from "./store/store.ts";
import {theme} from "./theme.ts";
import Footer from "./components/footer/Footer.tsx";
import {SalonProvider} from "./context/SalonContext.tsx";
import {Notifications} from "@mantine/notifications";

const colorSchemeManager = localStorageColorSchemeManager({
    key: 'my-color-scheme',
});



const Root = () => {
    return (
        <>
            <Provider store={store}>
                <MantineProvider theme={theme} defaultColorScheme="dark" colorSchemeManager={colorSchemeManager} >
                    <Notifications />
                    <SalonProvider>
                        <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
                            <div style={{flex: '1'}}>
                                <App/>
                            </div>
                            <Footer/>
                        </div>
                    </SalonProvider>
                </MantineProvider>
            </Provider>
        </>

    );
};

createRoot(document.getElementById('root')!).render(<Root/>);