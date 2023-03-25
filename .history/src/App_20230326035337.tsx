import logo from './assets/logo.svg';
import styles from './App.module.scss';
import { Menu } from './components/menu/menu';
import { Container } from './components/container/container';
import { Navbar } from './components/navbar/navbar';
import { Posts } from './components/posts/posts';
import Login from './components/login/login';
import SignUp from './components/sign-up/sign-up';
import CardTypePet from './components/card-type-pet/card-type-pet';
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
                <Route id="login" path="/" element={<Login />} />
                {/* <Route id="signUp" path="/signUp" element={<SignUp />} />
                {/* <Route path="/home" element={<Home />} /> */}
                <Route id="typePet" path="/typePet" element={<CardTypePet />}/> */}
            </Routes>
        </div>
    );
}

export default App;
