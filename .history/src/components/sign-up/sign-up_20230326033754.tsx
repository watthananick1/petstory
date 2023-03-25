import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
    apiKey: 'AIzaSyCFUBWxesLk-BX8KwwQfaI8Gs3cUCcBVWA',
    authDomain: 'pet-story-f51e3.firebaseapp.com',
    databaseURL: 'https://pet-story-f51e3-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'pet-story-f51e3',
    storageBucket: 'pet-story-f51e3.appspot.com',
    messagingSenderId: '576128138584',
    appId: '1:576128138584:web:c52f7384461830b1eeb92d',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();


function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Pet Story
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

function BirthDatePicker(props: any) {
    return (
        <TextField
            id="dateOfBirth"
            name="dateOfBirth"
            label="Date of Birth"
            type="date"
            fullWidth
            defaultValue="2000-01-01"
            InputLabelProps={{
                shrink: true,
            }}
            {...props}
        />
    );
}

function isInputValid(inputs: any) {
    const { email, password, confirmPassword } = inputs;
    if (!email || !password || !confirmPassword) {
        return false;
    }
    if (password !== confirmPassword) {
        return false;
    }
    return true;
}

const theme = createTheme();

export default function SignUp() {
    const [showPassword, setShowPassword] = React.useState(false);
    const [showconfirmPassword, setShowconfirmPassword] = React.useState(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        
        try {
            const { firstName, lastName, email, password, confirmPassword, dateOfBirth } =
                Object.fromEntries(data.entries());

            const inputData = {
                firstName,
                lastName,
                email,
                password,
                confirmPassword,
                dateOfBirth,
            };

            if (isInputValid(inputData)) {
                const credential = await firebase
                    .auth()
                    .createUserWithEmailAndPassword(email.toString(), password.toString());

                const { user } = credential;

                const googleCredential = await firebase.auth().getRedirectResult();
                if (googleCredential.user) {
                    const { displayName, email } = googleCredential.user;
                    const userData = {
                        firstName: displayName?.split(' ')[0],
                        lastName: displayName?.split(' ')[1],
                        email,
                        signUpMethod: 'google',
                    };

                    await db.collection('Users').doc(googleCredential.user.uid).set(userData);
                }

                if (user && user.uid) {
                    const userData = {
                        firstName,
                        lastName,
                        email,
                        dateOfBirth,
                        signUpMethod: 'email',
                    };

                    await db.collection('Users').doc(user.uid).set(userData);
                    
                }
            } else {
                console.log('Invalid input.');
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handlePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };
    const handleconfirmPasswordVisibility = () => {
        setShowconfirmPassword((prevShowPassword) => !prevShowPassword);
    };
    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage:
                            'url(https://firebasestorage.googleapis.com/v0/b/pet-story-f51e3.appspot.com/o/mainData%2FloginImage1.jpg?alt=media&token=4547e22e-e032-4eb9-82fa-84551789d27e)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign Up
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="firstName"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="First Name"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="lastName"
                                        label="Last Name"
                                        name="lastName"
                                        autoComplete="family-name"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type={showPassword ? 'text' : 'password'}
                                        id="password"
                                        autoComplete="new-password"
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton onClick={handlePasswordVisibility}>
                                                        {showPassword ? (
                                                            <VisibilityOff />
                                                        ) : (
                                                            <Visibility />
                                                        )}
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        autoComplete="new-password"
                                        name="confirmPassword"
                                        id="confirmPassword"
                                        label="Confirm Password"
                                        type={showconfirmPassword ? 'text' : 'password'}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleconfirmPasswordVisibility}
                                                    >
                                                        {showconfirmPassword ? (
                                                            <VisibilityOff />
                                                        ) : (
                                                            <Visibility />
                                                        )}
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <BirthDatePicker />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox value="allowExtraEmails" color="primary" />
                                        }
                                        label="ฉันต้องการรับข้อเสนอ โปรโมชันทางการตลาด และการอัปเดตทางอีเมล"
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign Up
                            </Button>
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                onClick={() => firebase.auth().signInWithPopup(provider)}
                            >
                                Sign up with Google
                            </Button>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        Already have an account? Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}
