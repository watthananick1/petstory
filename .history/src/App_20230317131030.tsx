import logo from './assets/logo.svg';
import styles from './App.module.scss';
import { Menu } from './components/menu/menu';
import { Container } from './components/container/container';
import { Navbar } from './components/navbar/navbar';
import { Post } from './components/post/post';

function App() {
    return (
        <div className={styles.App}>
            <Navbar />
            <Menu />
            <Container />
            {for let i = 0; i < 5}
        </div>
    );
}

export default App;
