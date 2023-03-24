import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  leftColumn: {
    background: '#f5f5f5',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightColumn: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '80%',
    maxWidth: '400px',
    height: 'auto',
  },
});

export default function MyComponent() {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} md={6} className={classes.leftColumn}>
        <img src="https://example.com/image.jpg" alt="example" className={classes.image} />
      </Grid>
      <Grid item xs={12} md={6} className={classes.rightColumn}>
        <Typography variant="h4" align="center">
          Some content goes here...
        </Typography>
      </Grid>
    </Grid>
  );
}
