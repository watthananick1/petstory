import styles from './card.module.scss';
import classNames from 'classnames';
import { ChangeEventHandler, SetStateAction, useState } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const Input = styled('input')({
  display: 'none',
});
const MAX_FILES = 6;
const MAX_IMAGE_SIZE = 5 * 1024 * 1024; // 5MB
const MAX_VIDEO_SIZE = 100 * 1024 * 1024; // 100MB

const Cards = () => {
  const [text, setText] = useState('');
  const [files, setFiles] = useState<File[]>([]);

  const handleTextChange = (event: { target: { value: string; }; }) => {
    setText(event.target.value);
  };

  const handleFileChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const newFiles = event.target.files;
  
    if (newFiles) {
      let totalSize = 0;
      let validFiles: File[] = [];
  
      for (let i = 0; i < newFiles.length; i++) {
        const file = newFiles[i];
  
        if (file.type.startsWith('image/') && file.size <= MAX_IMAGE_SIZE) {
          if (validFiles.length < MAX_FILES) {
            validFiles.push(file);
            totalSize += file.size;
          }
        } else if (file.type.startsWith('video/') && file.size <= MAX_VIDEO_SIZE) {
          validFiles = [file];
          totalSize += file.size;
          break;
        }
      }
  
      if (validFiles.length > 0) {
        setFiles(validFiles);
      } else {
        // show an error message or do something else
      }
    }
  };
  

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    // your post submission logic goes here
    setText('');
    setFiles([]);
  };

  return (
    <Box
      sx={{
        position: 'static',
        //display: 'flex',
        //justifyContent: 'center',
        
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
          style={{ borderRadius: '50%', width: '38px', height: '38px' }}
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
      {files.length > 0 && (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          {files[0].type.startsWith('image/') && (
            <img
              src={URL.createObjectURL(files[0])}
              alt="media-preview"
              style={{ maxWidth: '100%', maxHeight: '200px' }}
            />
          )}
          {files[0].type.startsWith('video/') && (
            <video controls style={{ maxWidth: '100%', maxHeight: '200px' }}>
              <source src={URL.createObjectURL(files[0])} type={files[0].type} />
              Your browser does not support the video tag.
            </video>
          )}
        </Box>
      )}
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
