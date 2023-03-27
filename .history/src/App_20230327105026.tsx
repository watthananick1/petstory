import logo from './assets/logo.svg';
import styles from './App.module.scss';
import Login from './components/login/login';
import SignUp from './components/sign-up/sign-up';
import CardTypePet from './components/card-type-pet/card-type-pet';
import { Home } from './components/home/home';
import { Route, Routes } from 'react-router';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import App from './App';

const theme = createTheme({
    // Define your theme object here
  })

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
                <Route id="typePet" path="/" element={<Login />} />
                <Route id="login" path="/home" element={<Home />} />
                <Route id="signUp" path="/signUp" element={<SignUp />} />
                <Route id="typePet" path="/typePet" element={<CardTypePet />} />
            </Routes>
        </div>
    );
}

export default App;
