import logo from './assets/logo.svg';
import styles from './App.module.scss';
import { Menu } from './components/menu/menu';
import { Container } from './components/container/container';
import { Navbar } from './components/navbar/navbar';
import { Posts } from './components/posts/posts';
import { login } from './components/login/login';
import { Route, Routes } from 'react-router';

function App() {
    return (
        // <div className={styles.App}>
        //     <Navbar />
        //     <Menu />
        //     <Container />
        //     <Posts />
        // </div>
        <div>
            <Routes>
                <Route id="login" path="/" element={<ogin />} />
                {/* <Route id="register" path="/register" element={<Register />} />
                <Route path="/home" element={<Home />} /> */}
            </Routes>
        </div>
    );
}

export default App;
