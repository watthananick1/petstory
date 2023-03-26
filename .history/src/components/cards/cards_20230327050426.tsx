import styles from './cards.module.scss';
import classNames from 'classnames';
import { ChangeEventHandler, SetStateAction, useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
import DeleteIcon from '@material-ui/icons/Delete';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import axios from 'axios';



const Input = styled('input')({
    display: 'none',
});

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

const db = firebase.firestore();

const isMobileDevice = () => {
    const ua = navigator.userAgent;
    return /Android|Mobi/i.test(ua);
};

const isFileUploadSupported = () => {
    let element = document.createElement('input');
    element.type = 'file';
    return (
        !element.disabled &&
        typeof element.multiple === 'boolean' &&
        typeof FileReader !== 'undefined' &&
        typeof window.URL !== 'undefined' &&
        typeof window.URL.createObjectURL === 'function'
    );
};

const MAX_FILES = 6;
const MAX_IMAGE_FILES = 5 * 1024 * 1024; // 5MB
const MAX_VIDEO_SIZE = 100 * 1024 * 1024; // 100MB

const Cards = () => {
    const [text, setText] = useState('');
    const [files, setFiles] = useState<File[]>([]);
    const [chipData, setChipData] = useState([]);

    const storage = getStorage();
    
    useEffect(() => {
        fetch('http://localhost:4000/typePet')
          .then((response) => response.json())
          .then((data) => {
            const newData = data.map((item: { id: any; nameType: any; }) => ({
              key: item.id,
              label: item.nameType,
            }));
            setChipData(newData);
          });
      }, []);
      

    const fileUploadSupported = isFileUploadSupported();
    if (fileUploadSupported) {
        console.log('File upload is supported.');
    } else {
        console.log('File upload is not supported.');
    }

    const handleTextChange = (event: { target: { value: string } }) => {
        setText(event.target.value);
    };

    const handleFileChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        const newFiles = event.target.files;

        if (newFiles) {
            let validFiles: File[] = [];
            let validImageFiles: File[] = [];
            let validVideoFile: File | null = null;

            for (let i = 0; i < newFiles.length; i++) {
                const file = newFiles[i];
                if (file.type.startsWith('image/') && file.size <= MAX_IMAGE_FILES) {
                    validImageFiles.push(file);
                } else if (file.type.startsWith('video/') && file.size <= MAX_VIDEO_SIZE) {
                    validVideoFile = file;
                }
            }

            if (validImageFiles.length > 0 && validImageFiles.length <= MAX_IMAGE_FILES) {
                validFiles = validFiles.concat(validImageFiles);
            }
            if (validVideoFile !== null) {
                validFiles.push(validVideoFile);
            }

            if (validFiles.length > 0 && validFiles.length <= MAX_FILES) {
                setFiles(validFiles);
            } else {
                // show an error message or do something else
            }
        }
    };

    const handleImageDelete = (index: number) => {
        setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    };

    const handleVideoDelete = (index: number) => {
        setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    };

    const handleSubmit = async (event: { preventDefault: () => void }) => {
        event.preventDefault();
      
        // Upload pet post to Firestore database here
        try {
          const docRef = await addDoc(collection(db, "Post"), {
            post.firstName,
            post.lastName,
            post.description,
            img,
            tagpet,
            like,
            Comment,
            date: new Date(),
          });
          console.log("Pet post uploaded successfully with ID: ", docRef.id);
        } catch (error) {
          console.error("Error uploading pet post to Firestore: ", error);
        }
      
        // Upload files to Firebase Storage
        const promises = files.map(async (file) => {
          const storageRef = ref(storage, "images/" + file.name);
          const snapshot = await uploadBytes(storageRef, file);
          console.log("File uploaded successfully", snapshot);
        });
      
        try {
          await Promise.all(promises);
          console.log("All files uploaded successfully");
        } catch (error) {
          console.error("Error uploading files to Firebase Storage", error);
        }
      
        // Clear text and files state after uploading
        setText("");
        setFiles([]);
      };
      

    return (
        <Box
            sx={{
                position: 'static',
                maxWidth: '100%',
                width: '47%',
                margin: '0 auto',
                border: '1px solid #ddd',
                borderRadius: '10px',
                p: 2,
                mb: 2,
                bgcolor: '#fff',
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <img
                    src="https://picsum.photos/200/200"
                    alt="avatar"
                    style={{ borderRadius: '50%', width: '48px', height: '48px' }}
                />
                <TextField
                    sx={{ marginLeft: 2 }}
                    multiline
                    minRows={2}
                    maxRows={4}
                    placeholder="What's on your mind?"
                    value={text}
                    onChange={handleTextChange}
                    fullWidth
                    InputProps={{
                        disableUnderline: true,
                    }}
                />
            </Box>
            <Grid container spacing={2}>
                {files.slice(0, 6).map((file, index) => (
                    <Grid key={index} item xs={4}>
                        {file.type.startsWith('image/') && (
                            <>
                                <img
                                    src={URL.createObjectURL(file)}
                                    alt={`media-preview-${index}`}
                                    style={{ maxWidth: '100%', maxHeight: '200px' }}
                                />
                                <div
                                    className={styles.deleteIcon}
                                    onClick={() => handleImageDelete(index)}
                                >
                                    <DeleteIcon />
                                </div>
                            </>
                        )}
                        {file.type.startsWith('video/') && (
                            <>
                                <video controls style={{ maxWidth: '100%', maxHeight: '200px' }}>
                                    <source src={URL.createObjectURL(file)} type={file.type} />
                                    Your browser does not support the video tag.
                                </video>
                                <div
                                    className={styles.deleteIcon}
                                    onClick={() => handleVideoDelete(index)}
                                >
                                    <DeleteIcon />
                                </div>
                            </>
                        )}
                    </Grid>
                ))}
            </Grid>
            <Box
                component="form"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mt: 2,
                    borderTop: '1px solid #eee',
                    paddingTop: 2,
                }}
                onSubmit={handleSubmit}
            >
                <label htmlFor="file-input">
                    <Input
                        id="file-input"
                        type="file"
                        accept="image/*, video/*"
                        onChange={handleFileChange}
                        multiple={true}
                    />
                    <IconButton color="primary" aria-label="upload picture" component="span">
                        <PhotoCamera />
                    </IconButton>
                </label>
                <Button
                    variant="contained"
                    color="primary"
                    disabled={!text && !files.length}
                    type="submit"
                >
                    Post
                </Button>
            </Box>
        </Box>
    );
};

export default Cards;
