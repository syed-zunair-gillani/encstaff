import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import TableRow from '@mui/material/TableRow';
import { useTheme } from '@mui/material/styles';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import IconButton from '@mui/material/IconButton';
import CardHeader from '@mui/material/CardHeader';
import ListItemText from '@mui/material/ListItemText';
import TableContainer from '@mui/material/TableContainer';

import { fDate, fTime } from 'src/utils/format-time';

import Label from 'src/components/label';
import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';
import { TableHeadCustom } from 'src/components/table';
import CustomPopover, { usePopover } from 'src/components/custom-popover';
import './app-customstyle.css';
import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
// ----------------------------------------------------------------------

export default function UpcomingAnniversaries({ title, subheader, tableLabels, tableData, ...other }) {

  const [anniversariesData, setAnniversariesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://encstaffapi.vercel.app/employees/anniversary');
        const data = await response.json();
        setAnniversariesData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);


  const getBackgroundColor = (idx) => {
    switch(idx) {
      case 0:
        return '#d6f5e8';
      case 1:
        return '#fddeff';
      case 2:
      case 3:
        return '#d6f3f9';
      default:
        return '';
    }
  };
  
  const getColor = (idx) => {
    switch(idx) {
      case 0:
        return '#007867';
      case 1:
        return '#511ab7';
      case 2:
      case 3:
        return '#006c9c';
      default:
        return '';
    }
  };
  

  return (
    <Card {...other} className='UpcomingAnniversaries'>
      <CardHeader title={title} subheader={subheader} sx={{ mb: 3 }} avatar={<Icon icon="solar:cup-star-bold" style={{
        color: '#1877F2',
        fontSize: '2.8rem'
      }} />} />
      {anniversariesData?.data?.length > 0 && (
        <TableContainer sx={{ overflow: 'unset' }}>
          <Scrollbar>
            <Table sx={{ minWidth: 600 }}>
              <TableHeadCustom headLabel={tableLabels} />

              <TableBody>
                {anniversariesData?.data.map((row, idx) => (
                  <TableRow key={row.name}>
                    <TableCell sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar
                        variant="circle"
                        alt={row.name}
                        src="https://api-dev-minimal-v510.vercel.app/assets/images/avatar/avatar_2.jpg"
                        sx={{ mr: 2, width: 48, height: 48 }}
                      />
                      {row.name}
                    </TableCell>
                    <TableCell>
                      <Box sx={{
                        backgroundColor: getBackgroundColor(idx),
                        color: getColor(idx),
                        display: 'inline',
                        padding: '4px 6px',
                        borderRadius: '5px',
                        fontWeight: 600,
                      }}>
                        {row.total_years} {row.total_years > 1 ? 'Years' : 'Year'}
                      </Box>
                    </TableCell>
                    <TableCell>{row.anniversary_date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Scrollbar>
        </TableContainer>
      )}
      {/* <Divider sx={{ borderStyle: 'dashed' }} />

      <Box sx={{ p: 2, textAlign: 'right' }}>
        <Button
          size="small"
          color="inherit"
          endIcon={<Iconify icon="eva:arrow-ios-forward-fill" width={18} sx={{ ml: -0.5 }} />}
        >
          View All
        </Button>
      </Box> */}
    </Card>
  );
}

UpcomingAnniversaries.propTypes = {
  subheader: PropTypes.string,
  tableData: PropTypes.checkPropTypes([], [], 'prop', 'UpcomingAnniversaries'),
  tableLabels: PropTypes.checkPropTypes([], [], 'prop', 'UpcomingAnniversaries'),
  title: PropTypes.string,
};

