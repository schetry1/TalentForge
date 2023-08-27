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
import logo from '../images/iitglogo.png';
import axios from 'axios';


const TestjobCard = ({job}) => {
 
    const handleDelete=async(req,res)=>{
        try{
          await axios.delete(`/jobs/${job._id}`);
          console.log('deleted')
          window.location.reload();
        }catch(err){
        console.log(err);
        }
        
      }
      const handleEdit=async(req,res)=>{
        try{
      
        }catch(err){
          
        }
      }  


    
  return <Card sx={{ display: 'flex' }}>
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
          {job.profile}
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" component="div">
          {job.duration}
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" component="div">
          Company: {job.company}
      </Typography>
      </CardContent>
  </Box>
  <CardActions>
  <Button color='primary' onClick={handleDelete}  variant="contained">Delete</Button>
   <Button color='primary' onClick={handleEdit}  variant="contained">Edit</Button>
  </CardActions>
  </Box>
</Card>;
};

export default TestjobCard;




