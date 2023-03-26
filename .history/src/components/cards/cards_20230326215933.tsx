import styles from './cards.module.scss';
import classNames from 'classnames';
import { ChangeEventHandler, SetStateAction, useState } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
import { Delete } from '@mui/icons-material';

const Input = styled('input')({
  display: 'none',
});
const MAX_FILES = 6;
const MAX_IMAGE_FILES = 5 * 1024 * 1024; // 5MB
const MAX_VIDEO_SIZE = 100 * 1024 * 1024; // 100MB

const Cards = () => {
  const [text, setText] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const [selectedFileIndex, setSelectedFileIndex] = useState(-1);

  const handleTextChange = (event: { target: { value: string; }; }) => {
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
    setFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
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
              <div className={styles.} onClick={() => handleImageDelete(index)}>
                <Delete />
              </div>
              <img
                src={URL.createObjectURL(file)}
                alt={`media-preview-${index}`}
                style={{ maxWidth: '100%', maxHeight: '200px' }}
              />
            </>
            )}
        {file.type.startsWith('video/') && (
          <video controls style={{ maxWidth: '100%', maxHeight: '200px' }}>
            <source src={URL.createObjectURL(file)} type={file.type} />
            Your browser does not support the video tag.
          </video>
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
