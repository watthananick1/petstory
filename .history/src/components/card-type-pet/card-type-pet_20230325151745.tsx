import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { Card, CardContent, Chip } from '@mui/material';
const images = [
    {
        url: 'https://firebasestorage.googleapis.com/v0/b/pet-story-f51e3.appspot.com/o/mainData%2FimgTypePet%2Fcat.jpg?alt=media&token=758765ef-8887-4d21-88d9-0f803717e977',
        title: 'Cat',
        width: '30%',
    },
    {
        url: 'https://firebasestorage.googleapis.com/v0/b/pet-story-f51e3.appspot.com/o/mainData%2FimgTypePet%2Ffe8b1ec969e2e21f4eda0a5275ca990b.jpg?alt=media&token=5d844f7c-f3fe-4b03-a39a-9786ab9c4aa2',
        title: 'Dog',
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
    width: '10% ', // Overrides inline-style
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
      border: '2px solid currentColor',
    },
  },
}));

const ImageTitle = styled(Typography)(({ theme }) => ({
  position: 'relative',
  p: 4,
  pt: 2,
  pb: (theme: { spacing: (arg0: number) => any; }) => `calc(${theme.spacing(1)} + 1px)`,
}));

const ImageButtonWrapper = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  '& > :not(style)': {
    m: 1,
    width: 128,
    height: 128,
  },
});

export default function CardTypePet() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', height: '100vh' }}>
      <Card sx={{ maxWidth: '100%', margin: '0 auto' }}>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            style={{ alignItems: 'center', textAlign: 'center', height: 50 }}
            component="div"
          >
            What type of pet are you interested in?
          </Typography>
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
            <ImageButtonWrapper key={image.title}>
              <ImageButton
                focusRipple
                key={image.title}
                style={{
                  width: '100%',
                }}
                onClick={() => console.log(`Clicked on ${image.title}`)}
              >
                <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                <ImageBackdrop className="MuiImageBackdrop-root" />
                <Image>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <ImageTitle
                      component="span"
                      variant="subtitle1"
                      color="inherit"
                    >
                      {image.title}
                    </ImageTitle>
                    <Chip
                      label="Click me"
                      variant="outlined"
                      size="small"
                      onClick={() => console.log(`Clicked on ${image.title} chip`)}
                      sx={{ ml: 1 }}
                    />
                  </Box>
                </Image>
              </ImageButton>
            </ImageButtonWrapper>
          ))}
        </Box>
      </Card>
    </div>
  );
}
