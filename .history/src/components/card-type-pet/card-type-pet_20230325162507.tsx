import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { Card, CardContent, Chip } from '@mui/material';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';


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

const database = firebase.database();



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



const ImageButtonWrapper = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  '& > :not(style)': {
    m: 1,
    width: 128,
    height: 128,
  },
});
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
interface InterestedTypes {
  [key: string]: boolean;
}

export default function CardTypePet() {
  const [interestedTypes, setInterestedTypes] = React.useState<InterestedTypes>({});
  const [typePetList, setTypePetList] = useState([]);
  
  const handleTypeClick = (title: string) => {
    const newInterestedTypes = { ...interestedTypes };
    if (newInterestedTypes[title]) {
      delete newInterestedTypes[title];
    } else {
      newInterestedTypes[title] = true;
    }
    setInterestedTypes(newInterestedTypes);
    database.ref('TypePet').set(newInterestedTypes);
  };

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
                onClick={() => handleTypeClick(image.title)}
              >
                <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                <ImageBackdrop className="MuiImageBackdrop-root" />
                <Image>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Chip
                      label={image.title.toString()}
                      color={interestedTypes[image.title] ? 'secondary' : 'primary'}
                      size="small"
                      onClick={() => handleTypeClick(image.title)}
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
