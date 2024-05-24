import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import Carousel, { useCarousel, CarouselDots, CarouselArrows } from 'src/components/carousel';
import './app-customstyle.css';
import { Box, Button, Tooltip } from '@mui/material';
import { useState } from 'react';
import Modal from '../app/createAnnouncement/createAnnouncementModal';
import useModal from '../../../hooks/useModal'

// ----------------------------------------------------------------------

export default function AppAnnouncements({ list, ...other }) {
  const carousel = useCarousel({
    speed: 800,
    autoplay: true,
    ...CarouselDots({
      sx: {
        color: 'primary.light',
      },
    }),
  });

  return (
    <Card {...other}>
      <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
        {list.map((app, index) => (
          <CarouselItem key={app.id} item={app} latest={index} active={index === carousel.currentIndex} />
        ))}
      </Carousel>

      <CarouselArrows
        onNext={carousel.onNext}
        onPrev={carousel.onPrev}
        sx={{ bottom: 8, right: 8, position: 'absolute', color: 'common.white' }}
      />
    </Card>
  );
}

AppAnnouncements.propTypes = {
  list: PropTypes.checkPropTypes({}, {}, 'prop', 'AppAnnouncements'),
};

// ----------------------------------------------------------------------

function CarouselItem({ item, active, latest }) {
  const theme = useTheme();
  const mode = theme.palette.mode
  const [editAnnouncement, setEditAnnouncement] = useState(false)
  const { isOpen, openModal, closeModal } = useModal();


  const { AnnounStatus, AnnounDate, AnnounDesc } = item;


  return (
    <>
    <div className='app-announcements'>
      <h3 className="flex justify-between items-center">
        Company Announcements
        <Tooltip title="Add New" arrow placement="left">
          <Box className='announcement-model-button-wrapper' onClick={openModal}>
            <div className="announcement-model-button">+</div>
          </Box>
        </Tooltip>

      </h3>
      <Box sx={{
                      backgroundColor: `${
                        latest === 0 && '#d6f5e8' 
                      }`,
                      color: `${
                        latest === 0 && '#007867' 
                      }`,
                      display: 'inline',
                      padding: '4px 6px',
                      borderRadius: '5px',
                      fontWeight: 600,
                      fontSize: '14px',
                      visibility: latest !== 0 && 'hidden'
                    }}>{AnnounStatus}</Box>
      
      <span className='app-announcements-date'>{AnnounDate}</span>
      <div className="announcement-contnet">
        <p>{AnnounDesc}</p>
        <Box sx={{ position: 'relative' }}>
          <div className="dots">
          <Box onClick={()=>setEditAnnouncement(!editAnnouncement)}>
            <Dots mode={mode} /> 
          </Box>
          </div>
          {
            editAnnouncement && <Box component="div" sx={{
              position: 'absolute',
              right: '10px',
              boxShadow: '0px 8px 18px -4px rgba(0,0,0,0.1)',
              backgroundColor: mode === 'dark' ? '#161C24' : '#fff',
              borderRadius: '12px',
              zIndex: '5',
              maxWidth: '130px',
              overflow: 'hidden'
            }}>
              <Button sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '.8rem',
                justifyContent: 'start',
                padding: '10px 12px',
                paddingRight: '2rem',
                maxWidth: '130px',
                borderRadius: '0',
                width: '100%',
                borderBottom: '1px dashed #E8ECE7'
              }}>
                <PencilIcon mode={mode}/>
                Edit
              </Button>
              <Button sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '.8rem',
                padding: '10px 12px',
                paddingRight: '2rem',
                color: '#FF5630'
              }}>
                <TransIcon/>
                Delete
              </Button>
            </Box>
          }
          
        </Box>
      </div>
      <hr />
    </div>
    <Modal isOpen={isOpen} closeModal={closeModal} />
      </>
  );
}

CarouselItem.propTypes = {
  active: PropTypes.bool,
  item: PropTypes.checkPropTypes({}, {}, 'prop', 'CarouselItem'),
};


function Dots({ mode }) {
  return (
    <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 12H12.01M12 6H12.01M12 18H12.01M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18ZM13 6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6Z" stroke={mode === 'dark' ? '#fff' : '#111'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function PencilIcon({mode}) {
  return (
    <svg width="19px" height="19px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.0671 2.27157C17.5 2.09228 17.9639 2 18.4324 2C18.9009 2 19.3648 2.09228 19.7977 2.27157C20.2305 2.45086 20.6238 2.71365 20.9551 3.04493C21.2864 3.37621 21.5492 3.7695 21.7285 4.20235C21.9077 4.63519 22 5.09911 22 5.56761C22 6.03611 21.9077 6.50003 21.7285 6.93288C21.5492 7.36572 21.2864 7.75901 20.9551 8.09029L20.4369 8.60845L15.3916 3.56308L15.9097 3.04493C16.241 2.71365 16.6343 2.45086 17.0671 2.27157Z" fill={mode === 'dark' ? '#fff' : '#111'} />
      <path d="M13.9774 4.9773L3.6546 15.3001C3.53154 15.4231 3.44273 15.5762 3.39694 15.7441L2.03526 20.7369C1.94084 21.0831 2.03917 21.4534 2.29292 21.7071C2.54667 21.9609 2.91693 22.0592 3.26314 21.9648L8.25597 20.6031C8.42387 20.5573 8.57691 20.4685 8.69996 20.3454L19.0227 10.0227L13.9774 4.9773Z" fill={mode === 'dark' ? '#fff' : '#111'}  />
    </svg>
  )
}

function TransIcon() {
  return (
    <svg width="19px" height="19px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 6.52381C3 6.12932 3.32671 5.80952 3.72973 5.80952H8.51787C8.52437 4.9683 8.61554 3.81504 9.45037 3.01668C10.1074 2.38839 11.0081 2 12 2C12.9919 2 13.8926 2.38839 14.5496 3.01668C15.3844 3.81504 15.4756 4.9683 15.4821 5.80952H20.2703C20.6733 5.80952 21 6.12932 21 6.52381C21 6.9183 20.6733 7.2381 20.2703 7.2381H3.72973C3.32671 7.2381 3 6.9183 3 6.52381Z" fill="#FF5630" />
      <path fillRule="evenodd" clipRule="evenodd" d="M11.5956 22H12.4044C15.1871 22 16.5785 22 17.4831 21.1141C18.3878 20.2281 18.4803 18.7749 18.6654 15.8685L18.9321 11.6806C19.0326 10.1036 19.0828 9.31511 18.6289 8.81545C18.1751 8.31579 17.4087 8.31579 15.876 8.31579H8.12404C6.59127 8.31579 5.82488 8.31579 5.37105 8.81545C4.91722 9.31511 4.96744 10.1036 5.06788 11.6806L5.33459 15.8685C5.5197 18.7749 5.61225 20.2281 6.51689 21.1141C7.42153 22 8.81289 22 11.5956 22ZM10.2463 12.1885C10.2051 11.7546 9.83753 11.4381 9.42537 11.4815C9.01321 11.5249 8.71251 11.9117 8.75372 12.3456L9.25372 17.6087C9.29494 18.0426 9.66247 18.3591 10.0746 18.3157C10.4868 18.2724 10.7875 17.8855 10.7463 17.4516L10.2463 12.1885ZM14.5746 11.4815C14.9868 11.5249 15.2875 11.9117 15.2463 12.3456L14.7463 17.6087C14.7051 18.0426 14.3375 18.3591 13.9254 18.3157C13.5132 18.2724 13.2125 17.8855 13.2537 17.4516L13.7537 12.1885C13.7949 11.7546 14.1625 11.4381 14.5746 11.4815Z" fill="#FF5630" />
    </svg>
  )
}