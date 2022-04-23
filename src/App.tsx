import { ThemeProvider } from 'styled-components';
import Router from './routers';
import { GlobalStyles } from './styles/globalStyles';
import { theme } from './styles/theme';

const App = () => (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router />
    </ThemeProvider>
);

export default App;
