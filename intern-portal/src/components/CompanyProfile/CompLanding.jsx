import React,{useState,useEffect,useContext} from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Avatar, Paper, TextField, Typography } from '@mui/material';
import Button from '../Responsive/Button';
import axios from 'axios';
import { FaWindows } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom'; 
import logo from '../images/iitglogo.png';
import { Box } from '@mui/system';
import { LoggedUserContext } from '../../context/LoggedUserContext';
import { Link } from 'react-router-dom';
import { CompanyContext } from '../../context/CompanyContext';
import TemporaryPage from './TemporaryPage';
import img from "../images/temporary.png"
import './temp.css'
import sideimg from '../images/sideimg.jpg' 



const CompLanding = () => {
  const[text,setText]=useState({name:'',
  about:'',
  location:'',
  domain:'',
  yearOfFoundation:'',
  phone:'',
  email:'',
  website:'',
  logo:'',
linkedin:''})
const navigate = useNavigate();
const handleInput=(e)=>{
   const name= e.target.name;
   const value=e.target.value;

   setText({...text, [name]:value})
}

  const [companyUser,setCompanyUser]= useContext(LoggedUserContext);
  const [company,setCompany]=useState();

// const location=useLocation();
// const path=location.pathname.split('/')[2];

  useEffect(()=>{
    const getCompany=async()=>{
    const res=await axios.get(`/company/${companyUser._id}`);
    setCompany(res.data);
    console.log(company)
    }
  getCompany()
  },[companyUser])

  const getCompanyUserdetails= async()=>{
      try{
          const res= await fetch('/auth/getuser',{
              method: "GET",
              headers:{
                 
                  "Content-Type": "application"
              },
          });
          const data = await res.json();
          setCompanyUser(data);
        console.log("yooo"+companyUser)
          if(!res.status ===200){
          const error= new Error(res.error);
          throw error;
          }
      } catch(err){
          console.log(err)
      }
  }


useEffect(()=>{
  getCompanyUserdetails();
},[]);

const handleCompSubmit=async(e)=>{
    e.preventDefault();
    const newCompany={
        userId:companyUser._id,
        name:text.name,
        about:text.about,
        location:text.location,
        domain:text.domain,
        yearOfFoundation:text.yearOfFoundation,
        phone:text.phone,
       email:text.email,
       website:text.website,
       logo:text.logo
    }
    try{
        await axios.post("/company/register",newCompany)     
        console.log('Company added')
        navigate(`/company/${companyUser._id}`)
    }catch(err){
    console.log(err);
    }
}



  return(<>
  
    <Container className='center-ele'>
      {company?(<>
        <Grid  container spacing={3}>
      <Grid className='center-ele flex' sx={{flexDirection:'column', justifyContent:'center'}} item lg={6}>
     <Typography variant='h2'>
         Let's Build The Future Together
     </Typography>
     <Typography variant='h6'>
         Find your candidates
     </Typography>
     <Link className='my-3' to={`/company/${companyUser._id}`}>
      <Button >View Profile
      </Button>
      </Link> 
      </Grid>
      <Grid item lg={6}>
       <img className='temp-img' src={sideimg}></img>
      </Grid>
    
  </Grid>
      </>):( <Box
      component="form"
      sx={{ mt: 2, paddingX: 45 }}
      onSubmit={handleCompSubmit}
    >
      <Grid item lg={12} alignItems="center"> 
         <Typography variant="h4">Register Your Company</Typography>
       </Grid>
      <Grid container
        direction="column"
        spacing={3}>
        <Grid item>
          <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:"space-around"}}>
            <Avatar src={logo}  sx={{ width: 56, height: 56 }}/>
            <Button variant="contained" sx={{backgroundColor:'#3acbf7',margin:'0 auto'}}>Change Your Photo</Button>
        </div> 
        </Grid>
      <Grid item>
        <div style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:'20px',justifyContent:"space-around",width:'80%'}} >
          <Typography sx={{marginRight:'20px',width:'100px'}}>Name</Typography>
          <TextField name="name" variant="standard" value={text.name} autoFocus={true} onChange={handleInput} sx={{width:'80%'}} />
        </div> 
      </Grid>
      <Grid item>
        <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:"space-around",width:'80%'}}>
          <Typography sx={{marginRight:'20px',width:'100px'}}>Phone Number</Typography>
          <TextField name="phone" variant="standard" value={text.phone} onChange={handleInput} sx={{width:'80%'}}  />
        </div> 
      </Grid>
      <Grid item>
        <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:"space-around",width:'80%'}}>
          <Typography sx={{marginRight:'20px',width:'100px'}}>Location</Typography>
          <TextField name="location" variant="standard" value={text.location} onChange={handleInput} sx={{width:'80%'}} />
        </div> 
      </Grid>
      <Grid item>
        <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:"space-around",width:'80%'}}>
          <Typography sx={{marginRight:'20px',width:'100px'}}>Domain</Typography>
          <TextField name="domain" variant="standard" value={text.domain} onChange={handleInput} sx={{width:'80%'}} />
        </div> 
      </Grid>
      <Grid item>
        <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:"space-around",width:'80%'}}>
          <Typography sx={{marginRight:'20px',width:'100px'}}>Year of Foundation</Typography>
          <TextField name="yearOfFoundation" variant="standard" value={text.yearOfFoundation} onChange={handleInput} sx={{width:'80%'}} />
        </div> 
      </Grid>
      <Grid item>
        <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:"space-around",width:'80%'}}>
          <Typography sx={{marginRight:'20px',width:'100px'}}>Email Id</Typography>
          <TextField name="email" variant="standard" value={text.email} onChange={handleInput} sx={{width:'80%'}} />
        </div>
      </Grid>
      <Grid item>
        <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:"space-around",width:'80%'}}>
          <Typography sx={{marginRight:'20px',width:'100px'}}>LinkedIn Id</Typography>
          <TextField name="linkedin" variant="standard" value={text.linkedin} onChange={handleInput} sx={{width:'80%'}} />
        </div>
      </Grid>
      <Grid item>
        <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:"space-around",width:'80%'}}>
          <Typography sx={{marginRight:'20px',width:'100px'}}>Website</Typography>
          <TextField name="website" variant="standard" value={text.website} onChange={handleInput} sx={{width:'80%'}} />
        </div>
      </Grid>

      <Grid item>
        <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:"space-around",width:'80%'}}>
          <Typography sx={{marginRight:'20px',width:'100px'}}>About</Typography>
          <TextField name="about" variant="outlined" value={text.about} onChange={handleInput} multiline rows={8} sx={{width:'80%'}} />
        </div>
      </Grid>
      <div style={{display:'flex',justifyContent:"center",width:'80%',marginBottom:'20px'}}>
      <Button type="submit" variant="outlined">Register</Button>
        </div>
     
      </Grid>
      </Box>)
}
         </Container>
         </>
         )
  
};

export default CompLanding;
