import styles from './cards.module.scss';
import classNames from 'classnames';
import { ChangeEventHandler, SetStateAction, useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Grid, useMediaQuery } from '@mui/material';
import DeleteIcon from '@material-ui/icons/Delete';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { collection, addDoc, updateDoc, getDoc, doc, DocumentReference, getFirestore, setDoc, FieldValue, onSnapshot } from "firebase/firestore";
import axios from 'axios';
import { makeStyles, Theme } from '@material-ui/core/styles';


export interface CardsProps {
    className?: string;
}


const Input = styled('input')({
    display: 'none',
});

interface PetPost {
    id: string;
    firstName: string;
    lastName: string;
    description: string;
    img: string[];
    tagpet: string[];
    like: string[];
    Comment: Record<string, never>;
    date: {
      _seconds: number;
      _nanoseconds: number;
    };
    postId: string;
  }
  

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

    const useStyles = makeStyles((theme: Theme) => ({
        root: {
            [theme.breakpoints.up('md')]: {
                maxWidth: '700px',
                margin: '0 auto',
            },
        },
        deleteIcon: {
            position: 'absolute',
            top: theme.spacing(1),
            right: theme.spacing(1),
            zIndex: 1,
            color: theme.palette.grey[500],
            cursor: 'pointer',
        },
    }));

    const MAX_FILES = 6;
    const MAX_IMAGE_FILES = 5 * 1024 * 1024; // 5MB
    const MAX_VIDEO_SIZE = 100 * 1024 * 1024; // 100MB

const Cards = ({ className }: CardsProps) => {
    const [text, setText] = useState('');
    const [files, setFiles] = useState<File[]>([]);
    const [chipData, setChipData] = useState([]);
    const matchesMd = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
    const [petPosts, setPetPosts] = useState<PetPost[]>([]);
      

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
      
      useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'petPosts'), (snapshot) => {
            const data: PetPost[] = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() as PetPost }));
            setPetPosts(data);

    const fileUploadSupported = isFileUploadSupported();
    if (fileUploadSupported) {
        console.log('File upload is supported.');
    } else {
        console.log('File upload is not supported.');
    }

    const handleTextChange = (event: { target: { value: string } }) => {
        setText(event.target.value);
    };

    const handleSubmit = async () => {
        const user = firebase.auth().currentUser;
        if (user) {
            const userId = user.uid;
            const storageRef = ref(storage, `images/${userId}`);
    
            const promises = files.map((file) => {
                const filename = `${Date.now()}-${file.name}`;
                const fileRef = ref(storageRef, filename);
                return uploadBytes(fileRef, file);
            });
    
            const downloadUrls = await Promise.all(promises).then(() =>
                Promise.all(files.map((file) => getDownloadURL(ref(storage, `images/${userId}/${Date.now()}-${file.name}`))))
            );
    
            const newPost: PetPost = {
                id: '',
                firstName: 'Mona',
                lastName: 'Teo',
                description: text,
                img: downloadUrls,
                tagpet: chipData.map((data) => data.label),
                like: [],
                Comment: {},
                date: {
                    _seconds: Date.now() / 1000,
                    _nanoseconds: 0,
                },
                postId: '',
            };
    
            await addDoc(collection(db, 'petPosts'), newPost).then((docRef) => {
                updateDoc(doc(db, 'petPosts', docRef.id), {
                    id: docRef.id,
                    postId: docRef.id,
                });
            });
        }
    };

    const handleDeleteImage = (index: number) => {
        const newFiles = [...files];
        newFiles.splice(index, 1);
        setFiles(newFiles);
    };
    
    

    const handleVideoDelete = (index: number) => {
        setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    };
    
    const post = {
        // id: localStorage.getItem("userId")?.toString(),
        id: "Ja3SlNT6SnRVTtbmS9KfbtZ8GVC3",
        firstName: "jack",
        lastName: "jasckaaa",
        description: text.toString(),
        img: files,
        tagpet: ["dog"],
        like: [],
        comment: {},
        postId: ""
      };
      const handleSubmit = async (event: { preventDefault: () => void }) => {
        event.preventDefault();
              
        // Upload new files to Firebase Storage
        const fileUrls: string[] = [];
        const promises = files.map(async (file) => {
          const storageRef = ref(storage, post.id + "/" + file.name);
          const snapshot = await uploadBytes(storageRef, file);
          const downloadUrl = await getDownloadURL(storageRef);
          fileUrls.push(downloadUrl);
          console.log("File uploaded successfully", snapshot);
        });
        console.log(promises);
        try {
          await Promise.all(promises);
          console.log("All files uploaded successfully");
          try {
            // Create a new document in the Post collection with a unique ID
            const postRef = db.collection('Post').doc();
            const postId = postRef.id;
            const userId = localStorage.getItem("userId")?.toString() || '';
            const now = new Date();
            const timestamp = {
              _seconds: Math.floor(now.getTime() / 1000),
              _nanoseconds: now.getMilliseconds() * 1000000
            };
      
            // Update the post data with the new values
            const updatedPost: PetPost = {
                description: text.toString(),
                tagpet: ["dog"],
                img: fileUrls,
                postId,
                id: userId,
                firstName: '',
                lastName: '',
                like: [],
                Comment: {},
                date: timestamp,
            };
              
            // Save the updated post data to Firestore
            try {
              await setDoc(postRef, updatedPost);
              console.log("Post created successfully");
            } catch (error) {
              console.error("Error creating post in Firestore", error);
            }
          } catch (error) {
            console.error("Error retrieving post data from Firestore", error);
          }
        } catch (error) {
          console.error("Error uploading files to Firebase Storage", error);
        }
      
        // Clear text and files state after updating
        setText("");
        setFiles([]);
      };
      
      
      

    return (
        <div className={classNames(styles.root, className)}>
            <Box className={classNames(styles.root, className)}>
            <Grid container>
                <Grid item xs={12} md={7} className={classes.root}>
                    <TextField
                        fullWidth
                        multiline
                        maxRows={4}
                        placeholder="Tell us your pet story..."
                        value={text}
                        onChange={handleTextChange}
                    />
                    {files.length > 0 && (
                        <Box display="flex" flexDirection="column" mt={2}>
                            {files.map((file, index) => (
                                <Box key={index} position="relative">
                                    <img
                                        src={URL.createObjectURL(file)}
                                        alt={file.name}
                                        style={{ width: '100%', height: 'auto' }}
                                    />
                                    <DeleteIcon
                                        className={classes.deleteIcon}
                                        onClick={() => handleDeleteImage(index)}
                                    />
                                </Box>
                            ))}
                        </Box>
                    )}
                    {fileUploadSupported && (
                        <Box display="flex" alignItems="center" mt={2}>
                            <input
                                accept="image/*, video/*"
                                className={classes.input}
                                id="icon-button-file"
                                type="file"
                                onChange={handleFileChange}
                                multiple
                            />
                            <label htmlFor="icon-button-file">
                                <IconButton color="primary" aria-label="upload picture" component="span">
                                    <PhotoCamera />
                                </IconButton>
                            </label>
                            <Box ml={1}>
                                <Button variant="contained" onClick={handleSubmit}>
                                    Post
                                </Button>
                            </Box>
                        </Box>
                    )}
                </Grid>
            </Grid>
        </Box>
        </div>
    );
};

export default Cards;
function initializeApp(firebaseConfig: { apiKey: string; authDomain: string; databaseURL: string; projectId: string; storageBucket: string; messagingSenderId: string; appId: string; }) {
    throw new Error('Function not implemented.');
}

