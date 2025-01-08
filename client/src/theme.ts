import {createTheme, rem, virtualColor} from "@mantine/core";

export const theme = createTheme({
    fontFamily: 'Jost, sans-serif',
    fontFamilyMonospace: 'Monaco, Courier, monospace',
    /*
        headings: { fontFamily: 'Greycliff CF, sans-serif' },
    */
    fontSizes: {
        xs: rem(14),
        sm: rem(16),
        md: rem(20),
        lg: rem(24),
        xl: rem(44),
    },
    lineHeights: {
        xs: '1',
        sm: '1',
        md: '1.2',
        lg: '1',
        xl: '1',
    },
    colors: {
        buttons: virtualColor({
            name: 'buttons',
            dark: 'dark',
            light: 'gray',
        }),
        background: virtualColor({
            name: 'back_header',
            dark: 'dark',
            light: 'gray',
        }),
        text: virtualColor({
            name: 'text',
            dark: 'dark',
            light: 'gray',
        }),
        textHead: virtualColor({
            name: 'textHead',
            dark: 'green',
            light: 'green',
        }),
        'light': [
            '#FFFFFF',
            '#EAF7FA',
            '#D5EFF5',
            '#C0E7F0',
            '#ABE0EB',
            '#96D8E6',
            '#81D1E1',
            '#6CC9DC',
            '#57C2D7',
            '#42BAD2',
        ],

        'dark': [
            '#fff', // Дуже темний фон
            '#202526', // Трохи світліший для елементів
            '#195e33', // Для карток або інших блоків
            '#42dd77', // Відтінок для кнопок у фоновому стані
            '#42dd77', // Акцентні елементи
            '#42dd77', // Для тексту заголовків
            '#fff', // Для вторинного тексту
            '#242323', // Для іконок та неактивних елементів
            '#A1A1A1', // Легкий акцент
            '#BDBDBD', // Підсвічування
        ],
    },
});

/* 'dark': [
            '#fff', // Дуже темний фон
            '#202526', // Трохи світліший для елементів
            '#195e33', // Для карток або інших блоків
            '#42dd77', // Відтінок для кнопок у фоновому стані
            '#42dd77', // Акцентні елементи
            '#42dd77', // Для тексту заголовків
            '#fff', // Для вторинного тексту
            '#040404', // Для іконок та неактивних елементів
            '#A1A1A1', // Легкий акцент
            '#BDBDBD', // Підсвічування
        ],*/
