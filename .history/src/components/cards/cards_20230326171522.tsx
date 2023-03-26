import styles from './card.module.scss';
import classNames from 'classnames';
import { SetStateAction, useState } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const Input = styled('input')({
  display: 'none',
});

const Cards = () => {
  const [text, setText] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const handleTextChange = (event: { target: { value: string; }; }) => {
    setText(event.target.value);
  };

  const handleFileChange = (event: { target: { files: SetStateAction<null>[]; }; }) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    // your post submission logic goes here
    setText('');
    setFile(null);
  };

  return (
    <Box
      sx={{
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
      {file && (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          {file.type.startsWith('image/') && (
            <img
              src={URL.createObjectURL(file)}
              alt="media-preview"
              style={{ maxWidth: '100%', maxHeight: '300px' }}
            />
          )}
          {file.type.startsWith('video/') && (
            <video controls style={{ maxWidth: '100%', maxHeight: '300px' }}>
              <source src={URL.createObjectURL(file)} type={file.type} />
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
          />
          <IconButton color="primary" aria-label="upload picture" component="span">
            <PhotoCamera />
          </IconButton>
        </label>
        <Button
          variant="contained"
          color="primary"
          disabled={!text && !file}
          type="submit"
        >
          Post
        </Button>
      </Box>
    </Box>
  );
};

export default Cards;
