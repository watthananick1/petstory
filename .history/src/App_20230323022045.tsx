import logo from './assets/logo.svg';
import styles from './App.module.scss';
import { Menu } from './components/menu/menu';
import { Container } from './components/container/container';
import { Navbar } from './components/navbar/navbar';
import { Posts } from './components/posts/posts';
import { ThemeProvider } from '@mui/material/styles';

function App() {
    return (
        <div className={styles.App}>
            <ThemeProvider theme={theme}>
            <Navbar />
            <Menu />
            <Container />
            <Posts />
            </ThemeProvider>
        </div>
    );
}

export default App;
