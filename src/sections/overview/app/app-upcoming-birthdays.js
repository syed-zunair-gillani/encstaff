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

export default function UpcomingBirthdays({ title, subheader, tableLabels, tableData, ...other }) {

    const [birthdaysData, setBirthdaysData] = useState([]);
    const theme = useTheme();

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://encstaffapi.vercel.app/employees/birthday');
          const data = await response.json();
          setBirthdaysData(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }, []);

  return (
    <Card {...other} className='UpcomingBirthdays'>
      <CardHeader title={title} subheader={subheader} sx={{ mb: 3 }} avatar={<Icon icon="mdi:birthday-cake" style={{ 
					color: '#1877F2',
					fontSize: '2.8rem'
				 }}/>} />
      {birthdaysData?.data?.length > 0 && (
      <TableContainer sx={{ overflow: 'unset' }}>
        <Scrollbar>
          <Table sx={{ minWidth: 400 }}>
            <TableHeadCustom headLabel={tableLabels} />

            <TableBody>
              {birthdaysData?.data.map((row, idx) => (
                <TableRow key={row.name} sx={{
                  // background: idx === 0 ? theme.palette.mode === "dark" ? '' : '#ECF8F4' : ''
                }}>
                  <TableCell sx={{ display: 'flex', alignItems: 'center' }} >
                    <Avatar
                      variant="circle"
                      alt={row.name}
                      src="https://api-dev-minimal-v510.vercel.app/assets/images/avatar/avatar_3.jpg"
                      sx={{ mr: 2, width: 48, height: 48 }}
                    />
                    {row.name}
                  </TableCell>

                  <TableCell>{row.upcomming}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Scrollbar>
      </TableContainer>
       )}
      {/* <Divider sx={{ borderStyle: 'dashed' }} /> */}
    </Card>
  );
}

UpcomingBirthdays.propTypes = {
  subheader: PropTypes.string,
  tableData: PropTypes.checkPropTypes([], [], 'prop', 'UpcomingBirthdays'),
  tableLabels: PropTypes.checkPropTypes([], [], 'prop', 'UpcomingBirthdays'),
  title: PropTypes.string,
};
