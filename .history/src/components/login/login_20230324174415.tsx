import React, { useState } from 'react';
import { TextField, Button, CircularProgress } from '@mui/material';
import { makeStyles, createTheme, ThemeProvider } from '@mui/material/styles';

https://chat.openai.com/chat

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    margin: theme.spacing(1),
    width: '100%',
  },
  button: {
    margin: theme.spacing(2),
  },
  loader: {
    margin: theme.spacing(2),
  },
}));

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const classes = useStyles();

  const handleLogin = () => {
    setLoading(true);

    // Your login logic goes here

    setLoading(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <form className={classes.form}>
        <TextField
          className={classes.input}
          label="Email"
          variant="outlined"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          className={classes.input}
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        {loading ? (
          <CircularProgress className={classes.loader} />
        ) : (
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={handleLogin}
          >
            Login
          </Button>
        )}
      </form>
    </ThemeProvider>
  );
};
