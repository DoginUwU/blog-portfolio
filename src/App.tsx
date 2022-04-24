import { ScrollingProvider } from 'react-scroll-section';
import { ThemeProvider } from 'styled-components';
import Router from './routers';
import { GlobalStyles } from './styles/globalStyles';
import { theme } from './styles/theme';

const App = () => (
    <ScrollingProvider>
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Router />
        </ThemeProvider>
    </ScrollingProvider>
);

export default App;
