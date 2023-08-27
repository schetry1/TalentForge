import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActions } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import statisticsIcon from '../images/statisticsIcon.png';
export default function StatisticsTile() {
  const theme = useTheme();

  return (
        <Card sx={{ display: 'flex' }}>
            <CardMedia
            component="img"
            sx={{ width: 100,height:100,margin:'20px' }}
            image={logo}
            alt="logo"
            />
            <Box sx={{ display: 'flex', flexDirection: 'row',justifyContent:'space-between', width:'100%'}}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                    Java Developer
                </Typography>
                </CardContent>
            </Box>
            <CardActions>
                <Typography component="div" variant="h6">
                    5
                </Typography>
            </CardActions>
            </Box>
        </Card>
  );
}