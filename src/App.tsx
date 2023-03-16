import logo from './assets/logo.svg';
import styles from './App.module.scss';
import { Menu } from './components/menu/menu';
import { Container } from './components/container/container';
import { Favorit } from './components/favorit/favorit';
import { Navbar } from './components/navbar/navbar';

function App() {
    return (
        <div className={styles.App}>
            <Navbar />
            <Menu />
            <Container />
            <Favorit />
        </div>
    );
}

export default App;
