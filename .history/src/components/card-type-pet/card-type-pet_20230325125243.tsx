import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';

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
    height: 100,
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
    <div className="pt-10 pb-32 px-28 rounded-xl shadow-sm bg-white space-y-20">
    <div className="ml-16 text-violet-700 font-bold text-5xl text-center">
      What type of pet are you interested in?
    </div>
    <div className="flex items-center">
      <div>
        <div className="flex justify-center pt-24 pb-1.5 px-4 rounded-xl shadow-sm bg-cover bg-center bg-[url('TODO')]">
          <div className="flex items-center pt-3 pb-4 pl-6 pr-10 rounded-lg bg-violet-700">
            <div className="w-4 h-4 flex-shrink-0 flex items-center justify-center bg-white">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0"
              >
                <path
                  d="M11.4038 6.75H6.90381V11.25H5.40381V6.75H0.903809V5.25H5.40381V0.75H6.90381V5.25H11.4038V6.75Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="ml-3 text-white font-bold text-right leading-snug">
              Cat
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex justify-center pt-24 pb-1.5 px-3 rounded-xl shadow-sm bg-cover bg-center bg-[url('TODO')]">
          <div className="flex items-end py-3 pl-6 pr-10 rounded-lg bg-violet-700">
            <div className="w-4 h-4 flex-shrink-0 flex items-center justify-center bg-white">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0"
              >
                <path
                  d="M11.4038 6.75H6.90381V11.25H5.40381V6.75H0.903809V5.25H5.40381V0.75H6.90381V5.25H11.4038V6.75Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="ml-3 text-white font-bold text-right leading-snug">
              Dog
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex justify-center pt-24 pb-1.5 px-1.5 rounded-xl shadow-sm bg-cover bg-center bg-[url('TODO')]">
          <div className="flex items-center pt-3 pb-4 px-6 rounded-lg bg-violet-700">
            <div className="w-4 h-4 flex-shrink-0 flex items-center justify-center bg-white">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0"
              >
                <path
                  d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="ml-3 text-white font-bold text-right leading-snug">
              Hamster
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="flex justify-center pt-24 pb-1.5 px-1.5 rounded-xl shadow-sm bg-cover bg-center bg-[url('TODO')]">
          <div className="flex items-center pt-3 pb-4 pl-6 pr-10 rounded-lg bg-violet-700">
            <div className="w-4 h-4 flex-shrink-0 flex items-center justify-center bg-white">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0"
              >
                <path
                  d="M11.25 6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25V0.75H6.75V5.25H11.25V6.75Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="ml-3 text-white font-bold text-right leading-snug">
              Snake
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    // <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
    //   {images.map((image) => (
    //     <ImageButton
    //       focusRipple
    //       key={image.title}
    //       style={{
    //         width: image.width,
    //       }}
    //     >
    //       <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
    //       <ImageBackdrop className="MuiImageBackdrop-root" />
    //       <Image>
    //         <Typography
    //           component="span"
    //           variant="subtitle1"
    //           color="inherit"
    //           sx={{
    //             position: 'relative',
    //             p: 4,
    //             pt: 2,
    //             pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
    //           }}
    //         >
    //           {image.title}
    //           <ImageMarked className="MuiImageMarked-root" />
    //         </Typography>
    //       </Image>
    //     </ImageButton>
    //   ))}
    // </Box>
  );
}