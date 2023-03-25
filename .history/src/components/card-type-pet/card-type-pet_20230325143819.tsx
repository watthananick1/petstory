import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { Card, CardContent, Paper } from '@mui/material';

const images = [
    {
        url: 'https://firebasestorage.googleapis.com/v0/b/pet-story-f51e3.appspot.com/o/mainData%2FimgTypePet%2Fcat.jpg?alt=media&token=758765ef-8887-4d21-88d9-0f803717e977',
        title: 'Cat',
        width: '30%',
    },
    {
        url: '/static/images/buttons/burgers.jpg',
        title: 'Burgers',
        width: '30%',
    },
    {
        url: '/static/images/buttons/camera.jpg',
        title: 'Camera',
        width: '30%',
    },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('sm')]: {
        width: '100% !important', // Overrides inline-style
        height: '2%',
    },
    '&:hover, &.Mui-focusVisible': {
        zIndex: 1,
        '& .MuiImageBackdrop-root': {
            opacity: 0.15,
        },
        '& .MuiImageMarked-root': {
            opacity: 0,
        },
        '& .MuiTypography-root': {
            border: '4px solid currentColor',
        },
    },
}));

const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
}));

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 10,
  lineHeight: '60px',
}));

export default function CardTypePet() {
    return (
        <div style={{ display: 'flex', alignItems: 'center', height: '100vh'}}>
            <Card sx={{ minWidth: '50%', margin: '0 auto' }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" style={{alignItems: 'center', textAlign: 'center', height: 50}} component="div">
                      What type of pet are you interested in?
                    </Typography >
                </CardContent>
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                      m: 2,
                      width: 128,
                      height: 128,
                    },
                  }}
                >
                  {images.map((image) => (
                      <Item >
                        <ImageButton
                            focusRipple
                            key={image.title}
                            style={{
                                width: 'auto',
                            }}
                            onClick={() => console.log(`Clicked on ${image.title}`)}
                        >
                            <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                            <ImageBackdrop className="MuiImageBackdrop-root" />
                            <Image>
                                <Typography
                                    component="span"
                                    variant="subtitle1"
                                    color="inherit"
                                    sx={{
                                        position: 'relative',
                                        p: 4,
                                        pt: 2,
                                        pb: (theme) => `calc(${theme.spacing(1)} + 2px)`,
                                    }}
                                >
                                    {image.title}
                                </Typography>
                            </Image>
                        </ImageButton>
                        </Item>
                    ))}
                </Box>
                
            </Card>
        </div>
    );
}
