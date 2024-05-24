import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Box, TextField, Typography } from '@mui/material';
import '../app-customstyle.css';
import { useTheme } from '@mui/material/styles';

const modalStyle = {
  width: '500px',
};

const Modal = ({ isOpen, closeModal }) => {
  const [announcementText, setAnnouncementText] = useState('');

  const handleAnnouncementChange = (event) => {
    setAnnouncementText(event.target.value);
  };

  const handleCreateAnnouncement = () => {
    // You can handle the creation of announcement here
    console.log('Announcement created:', announcementText);
    closeModal();
  };

  const theme = useTheme();
  const mode = theme.palette.mode

  return (
    <Dialog open={isOpen} onClose={closeModal} >
      <Box className="model-head-wrapper"
        sx={{
          borderBottom: `1px dashed ${mode === 'dark' ? '#637381' : '#E8ECE7'} `
        }}
      >
        <Box className="modal-title">
        <BellIcon mode={mode}/>
          <DialogTitle sx={{ paddingLeft: '0' }}>
            Create Announcement
          </DialogTitle>
        </Box>
        <DialogActions sx={{ padding: 0 }}>
          <Box onClick={closeModal} sx={{
            cursor: 'pointer'
          }}>
            <CrossModel mode={mode}/>
          </Box>
        </DialogActions>
      </Box>

      <DialogContent>
        <Typography sx={{
          color: '#637381',
          fontSize: '18px',
          padding: '1rem 0'
        }}>Announcements will be viewable by the entire staff from their dashboard and post immediately.</Typography>
        <TextField
          autoFocus
          margin="dense"
          label=""
          fullWidth
          multiline
          value={announcementText}
          rows={5}
          onChange={handleAnnouncementChange}
        />
        <Box sx={{
          color: '#637381',
          fontSize: '18px',
          padding: '5px 1rem'
        }}>0/250</Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCreateAnnouncement} color="primary" sx={{
          backgroundColor: '#00A76F',
          color: '#fff',
          fontWeight: 700,
          padding: '10px 1rem',
          '&:hover': {
            color: mode === 'dark' ? '#fff' : '#111',
          },
        }}>
          Create Announcement
        </Button>
        <Button onClick={closeModal} color="secondary" sx={{
          border: `1px solid #Dce0e4`,
          fontWeight: 700,
          color: mode === 'dark' ? '#fff' : `#111`,
          padding: '10px 1rem' 
        }}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;


function BellIcon({mode}) {
  return (
    <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.35179 20.2418C9.19288 21.311 10.5142 22 12 22C13.4858 22 14.8071 21.311 15.6482 20.2418C13.2264 20.57 10.7736 20.57 8.35179 20.2418Z" fill={mode === 'dark' ? '#fff' : '#111'} />
      <path fillRule="evenodd" clipRule="evenodd" d="M18.7491 9.7041V9C18.7491 5.13401 15.7274 2 12 2C8.27256 2 5.25087 5.13401 5.25087 9V9.7041C5.25087 10.5491 5.00972 11.3752 4.5578 12.0782L3.45036 13.8012C2.43882 15.3749 3.21105 17.5139 4.97036 18.0116C9.57274 19.3134 14.4273 19.3134 19.0296 18.0116C20.789 17.5139 21.5612 15.3749 20.5496 13.8012L19.4422 12.0782C18.9903 11.3752 18.7491 10.5491 18.7491 9.7041ZM12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V10C12.75 10.4142 12.4142 10.75 12 10.75C11.5858 10.75 11.25 10.4142 11.25 10V6C11.25 5.58579 11.5858 5.25 12 5.25Z" fill={mode === 'dark' ? '#fff' : '#111'} />
    </svg>
  )
}

function CrossModel({mode}) {
  return (
    <svg width="30px" height="30px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.96967 16.4697C6.67678 16.7626 6.67678 17.2374 6.96967 17.5303C7.26256 17.8232 7.73744 17.8232 8.03033 17.5303L6.96967 16.4697ZM13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697L13.0303 12.5303ZM11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303L11.9697 11.4697ZM18.0303 7.53033C18.3232 7.23744 18.3232 6.76256 18.0303 6.46967C17.7374 6.17678 17.2626 6.17678 16.9697 6.46967L18.0303 7.53033ZM13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303L13.0303 11.4697ZM16.9697 17.5303C17.2626 17.8232 17.7374 17.8232 18.0303 17.5303C18.3232 17.2374 18.3232 16.7626 18.0303 16.4697L16.9697 17.5303ZM11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697L11.9697 12.5303ZM8.03033 6.46967C7.73744 6.17678 7.26256 6.17678 6.96967 6.46967C6.67678 6.76256 6.67678 7.23744 6.96967 7.53033L8.03033 6.46967ZM8.03033 17.5303L13.0303 12.5303L11.9697 11.4697L6.96967 16.4697L8.03033 17.5303ZM13.0303 12.5303L18.0303 7.53033L16.9697 6.46967L11.9697 11.4697L13.0303 12.5303ZM11.9697 12.5303L16.9697 17.5303L18.0303 16.4697L13.0303 11.4697L11.9697 12.5303ZM13.0303 11.4697L8.03033 6.46967L6.96967 7.53033L11.9697 12.5303L13.0303 11.4697Z" fill={mode === 'dark' ? '#fff' : '#111'} />
    </svg>
  )
}