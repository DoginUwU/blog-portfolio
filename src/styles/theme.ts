import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
    colors: {
        background: '#E4E4E4',
        white: '#fafafa',
        black: '#121212',
        text: {
            primary: '#333333',
            secondary: '#fafafa',
        },
        gray: {
            900: '#757575',
            800: '#979797',
            700: '#b7b7b7',
            600: '#d0d0d0',
        },
        semantic: {
            blue: '#003f8c',
            lightBlue: '#428aff',
        },
    },
    breakpoints: {
        xs: '0',
        sm: '576px',
        md: '992px',
        lg: '1200px',
        xl: '1400px',
    },
};

export { theme };
