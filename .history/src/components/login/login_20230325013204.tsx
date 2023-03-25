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
import { GoogleAuthProvider } from 'firebase/auth';
import { watch } from 'fs';

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

const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
        await firebase.auth().signInWithPopup(provider);
    } catch (error) {
        console.error(error);
    }
};

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
const data :a
const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  try {
      await firebase
          .auth()
          .signInWithEmailAndPassword(
              data.get('email') as string,
              data.get('password') as string
          );
      console.log('Success');
  } catch (error) {
      console.error(error);
  }
};

const theme = createTheme();

export default function SignInSide() {
    const [showPassword, setShowPassword] = React.useState(false);

    const handlePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
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
                            Sign in
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                autoComplete="current-password"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={handlePasswordVisibility}>
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleGoogleSignIn}
                                fullWidth
                            >
                                Sign in with Google
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                <Link href="#" variant="body2" onClick={() => {
                                  if (data && data.has('email')) {
                                    firebase.auth().sendPasswordResetEmail(data.get('email') as string);
                                  }
                                }}>
                                  Forgot password?
                                </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="/signUp" variant="body2">
                                        {"Don't have an account? Sign Up"}
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
