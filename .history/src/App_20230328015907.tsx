import logo from './assets/logo.svg';
import styles from './App.module.scss';
import Login from './components/login/login';
import SignUp from './components/sign-up/sign-up';
import CardTypePet from './components/card-type-pet/card-type-pet';
import { Home } from './components/home/home';
import { Route, Routes } from 'react-router';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    // Define your theme object here
  })

function App() {
    return (
        <ThemeProvider theme={theme}>
        <div>
            <Routes>
                <Route id="typepet" path="/" element={<Login />} />
                <Route id="login" path="/home" element={<Home />} />
                <Route id="signup" path="/signUp" element={<SignUp />} />
                <Route id="typepet" path="/typePet" element={<CardTypePet />} />
            </Routes>
        </div>
        </ThemeProvider>
    );
}

export default App;
