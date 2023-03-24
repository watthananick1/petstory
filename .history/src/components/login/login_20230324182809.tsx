import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography, { TypographyClasses, TypographyPropsVariantOverrides } from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, SxProps, Theme, ThemeProvider, TypographyVariant } from '@mui/material/styles';
import { CommonProps } from '@mui/material/OverridableComponent';
import { SystemProps } from '@mui/system';
import { OverridableStringUnion } from '@mui/types';
import { IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { GoogleAuthProvider } from "firebase/auth";

const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  try {
    await firebase.auth().signInWithEmailAndPassword(
      data.get("email") as string,
      data.get("password") as string
    );
    console.log()
  } catch (error) {
    console.error(error);
  }
};


const firebaseConfig = {
  apiKey: "AIzaSyCFUBWxesLk-BX8KwwQfaI8Gs3cUCcBVWA",
  authDomain: "pet-story-f51e3.firebaseapp.com",
  databaseURL: "https://pet-story-f51e3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pet-story-f51e3",
  storageBucket: "pet-story-f51e3.appspot.com",
  messagingSenderId: "576128138584",
  appId: "1:576128138584:web:c52f7384461830b1eeb92d"
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

const theme = createTheme();

export default function SignIn() {
  const [showPassword, setShowPassword] = React.useState(false);
  
  const handlePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  
  const handleSubmit = (event: { preventDefault: () => void; currentTarget: HTMLFormElement | undefined; }) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
      <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                  sx={{
                      marginTop: 8,
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
                  <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
                      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
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
                              <Link href="#" variant="body2">
                                  Forgot password?
                              </Link>
                          </Grid>
                          <Grid item>
                              <Link href="#" variant="body2">
                                  {"Don't have an account? Sign Up"}
                              </Link>
                          </Grid>
                      </Grid>
                  </Box>
              </Box>
          </Container>
      </ThemeProvider>
  );
}