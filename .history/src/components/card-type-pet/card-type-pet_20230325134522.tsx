import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { Card, CardContent } from '@mui/material';

const images = [
    {
        url: '/static/images/buttons/breakfast.jpg',
        title: 'Breakfast',
        width: '40%',
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
        height: '10%',
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

const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
}));

export default function CardTypePet() {
    return (
        <div style={{ display: 'flex', alignItems: 'center', height: '100', width: '100%' }}>
            <Card sx={{ maxWidth: '100%', margin: '0 auto' }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
                    {images.map((image) => (
                        <ImageButton
                            focusRipple
                            key={image.title}
                            style={{
                                width: image.width,
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
                                        pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                                    }}
                                >
                                    {image.title}
                                </Typography>
                            </Image>
                        </ImageButton>
                    ))}
                </Box>
            </Card>
        </div>
    );
}
