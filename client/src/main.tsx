import { createRoot } from 'react-dom/client';
import './index.css';
import '@mantine/core/styles.css';
import App from './App';
import {
    localStorageColorSchemeManager,
    MantineProvider,
} from '@mantine/core';
import Header from "./components/header/Header.tsx";
import {Provider} from "react-redux";
import store from "./store/store.ts";
import {theme} from "./theme.ts";
import Footer from "./components/footer/Footer.tsx";
import {SalonProvider} from "./context/SalonContext.tsx";

const colorSchemeManager = localStorageColorSchemeManager({
    key: 'my-color-scheme',
});



const Root = () => {
    return (
        <>
            <Provider store={store}>
                <MantineProvider theme={theme} defaultColorScheme="dark" colorSchemeManager={colorSchemeManager} >
                    <SalonProvider>
                        <Header/>
                        <App />
                        <Footer/>
                    </SalonProvider>
                </MantineProvider>
            </Provider>
        </>

    );
};

createRoot(document.getElementById('root')!).render(<Root />);