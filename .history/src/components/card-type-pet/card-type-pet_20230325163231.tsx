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

interface TypePet {
  id: number;
  nameType: string;
  imgPet: string;
}

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
  const [typePetList, setTypePetList] = React.useState<ERROR in src/components/card-type-pet/card-type-pet.tsx:145:46
  TS2339: Property 'id' does not exist on type 'never'.
      143 |         >
      144 |           {typePetList.map((typePet) => (
    > 145 |             <ImageButtonWrapper key={typePet.id}>
          |                                              ^^
      146 |               <ImageButton
      147 |                 focusRipple
      148 |                 key={typePet.id}
  
  ERROR in src/components/card-type-pet/card-type-pet.tsx:148:30
  TS2339: Property 'id' does not exist on type 'never'.
      146 |               <ImageButton
      147 |                 focusRipple
    > 148 |                 key={typePet.id}
          |                              ^^
      149 |                 style={{
      150 |                   width: '100%',
      151 |                 }}
  
  ERROR in src/components/card-type-pet/card-type-pet.tsx:152:56
  TS2339: Property 'nameType' does not exist on type 'never'.
      150 |                   width: '100%',
      151 |                 }}
    > 152 |                 onClick={() => handleTypeClick(typePet.nameType)}
          |                                                        ^^^^^^^^
      153 |               >
      154 |                 <ImageSrc style={{ backgroundImage: `url(${typePet.imgPet})` }} />
      155 |                 <ImageBackdrop className="MuiImageBackdrop-root" />
  
  ERROR in src/components/card-type-pet/card-type-pet.tsx:154:68
  TS2339: Property 'imgPet' does not exist on type 'never'.
      152 |                 onClick={() => handleTypeClick(typePet.nameType)}
      153 |               >
    > 154 |                 <ImageSrc style={{ backgroundImage: `url(${typePet.imgPet})` }} />
          |                                                                    ^^^^^^
      155 |                 <ImageBackdrop className="MuiImageBackdrop-root" />
      156 |                 <Image>
      157 |                   <Box sx={{ display: 'flex', alignItems: 'center' }}>
  
  ERROR in src/components/card-type-pet/card-type-pet.tsx:159:38
  TS2339: Property 'nameType' does not exist on type 'never'.
      157 |                   <Box sx={{ display: 'flex', alignItems: 'center' }}>
      158 |                     <Chip
    > 159 |                       label={typePet.nameType.toString()}
          |                                      ^^^^^^^^
      160 |                       color={interestedTypes[typePet.nameType] ? 'secondary' : 'primary'}
      161 |                       size="small"
      162 |                       onClick={() => handleTypeClick(typePet.nameType)}
  
  ERROR in src/components/card-type-pet/card-type-pet.tsx:160:54
  TS2339: Property 'nameType' does not exist on type 'never'.
      158 |                     <Chip
      159 |                       label={typePet.nameType.toString()}
    > 160 |                       color={interestedTypes[typePet.nameType] ? 'secondary' : 'primary'}
          |                                                      ^^^^^^^^
      161 |                       size="small"
      162 |                       onClick={() => handleTypeClick(typePet.nameType)}
      163 |                       sx={{ ml: 1 }}
  
  ERROR in src/components/card-type-pet/card-type-pet.tsx:162:62
  TS2339: Property 'nameType' does not exist on type 'never'.
      160 |                       color={interestedTypes[typePet.nameType] ? 'secondary' : 'primary'}
      161 |                       size="small"
    > 162 |                       onClick={() => handleTypeClick(typePet.nameType)}
          |                                                              ^^^^^^^^
      163 |                       sx={{ ml: 1 }}
      164 |                     />
      165 |                   </Box>>([]);
  
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
  
  React.useEffect(() => {
    fetch("http://localhost:4000/typePet")
      .then((response) => response.json())
      .then((data) => setTypePetList(data))
      .catch((error) => console.error(error));
  }, []);

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
          {typePetList.map((typePet) => (
            <ImageButtonWrapper key={typePet.id}>
              <ImageButton
                focusRipple
                key={typePet.id}
                style={{
                  width: '100%',
                }}
                onClick={() => handleTypeClick(typePet.nameType)}
              >
                <ImageSrc style={{ backgroundImage: `url(${typePet.imgPet})` }} />
                <ImageBackdrop className="MuiImageBackdrop-root" />
                <Image>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Chip
                      label={typePet.nameType.toString()}
                      color={interestedTypes[typePet.nameType] ? 'secondary' : 'primary'}
                      size="small"
                      onClick={() => handleTypeClick(typePet.nameType)}
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
