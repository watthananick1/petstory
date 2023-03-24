import logo from './assets/logo.svg';
import styles from './App.module.scss';
import { Menu } from './components/menu/menu';
import { Container } from './components/container/container';
import { Navbar } from './components/navbar/navbar';
import { Posts } from './components/posts/posts';
import { Route, Routes } from "react-router";

function App() {
    return (
        <div className={styles.App}>
            <Navbar />
            <Menu />
            <Container />
            <Posts />
        </div>
    );
}

export default App;
