import React,{useEffect, useState} from 'react';
import Grid from '@mui/material/Grid';
import Button from '../../Responsive/Button';
import TextField from '@mui/material/TextField';
import Paper from '@material-ui/core/paper'
import axios from "axios";
import { Avatar, Typography } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import logo from '../../images/iitglogo.png'
import { useNavigate } from 'react-router-dom';
import Autocomplete from '@mui/material/Autocomplete';
const EditDetails = () => {

//////////////later we will use local storage
  const [studentDetails,setStudentDetails]= useState({});

  const getStudetails= async()=>{
      try{
          const res= await fetch('/auth/getuser',{
              method: "GET",
              headers:{
                 
                  "Content-Type": "application"
              },
          });
          const data = await res.json();
          console.log(data);
          setStudentDetails(data);

          if(!res.status ===200){
          const error= new Error(res.error);
          throw error;
          }
      } catch(err){
          console.log(err)
      }
  }


useEffect(()=>{
  getStudetails();
},[]);
////////////////////////////////////
  

const navigate = useNavigate()
const handleInput = (e)=>{
    const name= e.target.name;
    const value= e.target.value;

   setStudentDetails({...studentDetails,[name]:value})
}

const updateDetails= async(e)=>{
  console.log("clicked")
  e.preventDefault();
 const username= studentDetails.username;
 const rollno=studentDetails.rollno;
 const branch=studentDetails.branch;
 const degree=studentDetails.degree;
 const yearofgraduation=studentDetails.yearofgraduation;
 const linkedin=studentDetails.linkedin;
 const email=studentDetails.email;
 const location=studentDetails.location;
  const bio=studentDetails.bio;
  const resume=studentDetails.resume;
//  const newDetail={
//   userId:companyUser._id,
//   name:text.name,
//   about:text.about,
//   location:text.location,
//   phone:text.phone,
//  email:text.email,
//  website:text.website,
//  logo:text.logo
// }

//  try{
//   await axios.post("/company/register",newCompany)     
//   console.log('Company added')
//   navigate(`/company/${companyUser._id}`)
// }catch(err){
// console.log(err);
// }

  

 const res=await fetch(`/student/${studentDetails._id}`,{
   method: "PUT",
   headers:{
     "Content-Type": "application/json"
   },
   body: JSON.stringify({
     userId:studentDetails._id,
     username: username,
     email:email,
     rollno:rollno,
     branch:branch,
     degree:degree,
     location:location,
     graduation:yearofgraduation,
     linkedin:linkedin,
     bio: bio,
     resume:resume
     
   })
 });

 const data=await res.json();
 if(!data){
   console.log("not posted");
 }else{
   navigate(`/student/${studentDetails._id}`)
   console.log("updated")
 }
 
}
const options = jobFields.map((option) => {
  const stackType = option.type;
  return {
      stackType: stackType,
    ...option,
  };
});
  return (
  <form onSubmit={updateDetails}>
 <Grid container
  direction="column"
 spacing={5}>
  <Grid item>
    <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:"space-around"}}>
      <Avatar src={logo}  sx={{ width: 56, height: 56 }}/>
      <Button variant="contained" onClick={updateDetails} sx={{backgroundColor:'#3acbf7',margin:'0 auto'}}>Change Your Photo</Button>
   </div> 
  </Grid>
 <Grid item>
   <div style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:'20px'}}>
    <Typography sx={{marginRight:'20px',width:'100px'}}>Name</Typography>
    <TextField name="username" variant="standard" value={studentDetails.username} onChange={handleInput} sx={{width:'80%'}}/>
   </div> 
</Grid>
<Grid item>
  <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
    <Typography sx={{marginRight:'20px',width:'100px'}}>Roll no</Typography>
    <TextField name="rollno" variant="standard" value={studentDetails.rollno} onChange={handleInput} sx={{width:'80%'}}  />
  </div> 
</Grid>
<Grid item>
  <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
    <Typography sx={{marginRight:'20px',width:'100px'}}>Location</Typography>
    <TextField name="location" variant="standard" value={studentDetails.location} onChange={handleInput} sx={{width:'80%'}}  />
  </div> 
</Grid>
<Grid item>
  <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
    <Typography sx={{marginRight:'20px',width:'100px'}}>Degree</Typography>
    <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={studentDetails.degree}
          label="Degree"
          onChange={handleInput}
          sx={{width:'80%'}}
        >
          <MenuItem value={'B.Tech'}>B.Tech</MenuItem>
          <MenuItem value={'B.Des'}>B.Des</MenuItem>
          <MenuItem value={'M.A'}>M.A</MenuItem>
          <MenuItem value={'MBA'}>MBA</MenuItem>
          <MenuItem value={'M.Des'}>M.Des</MenuItem>
          <MenuItem value={'M.Sc'}>M.sc</MenuItem>
          <MenuItem value={'M.Tech'}>M.Tech</MenuItem>
          <MenuItem value={'PhD'}>PhD</MenuItem>
        </Select>
  </div>
</Grid>
<Grid item>
  <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
    <Typography sx={{marginRight:'20px',width:'100px'}}>Branch</Typography>
    <TextField name="branch" variant="standard" value={studentDetails.branch} onChange={handleInput} sx={{width:'80%'}} />
  </div> 
</Grid>
<Grid item>
  <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
    <Typography sx={{marginRight:'20px',width:'100px'}}>Year of Graduation</Typography>
    <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={studentDetails.graduation}
          label="Year of Graduation"
          onChange={handleInput}
          sx={{width:'80%'}}
        >
          <MenuItem value={2020}>2020</MenuItem>
          <MenuItem value={2021}>2021</MenuItem>
          <MenuItem value={2022}>2022</MenuItem>
          <MenuItem value={2023}>2021</MenuItem>
          <MenuItem value={2024}>2024</MenuItem>
          <MenuItem value={2025}>2025</MenuItem>
          <MenuItem value={2026}>2026</MenuItem>
          <MenuItem value={2027}>2027</MenuItem>
          <MenuItem value={2028}>2028</MenuItem>
        </Select>
  </div>
</Grid>
<Grid item>
  <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
    <Typography sx={{marginRight:'20px',width:'100px'}}>LinkedIn</Typography>
    <TextField name="linkedin" variant="standard" value={studentDetails.linkedin} onChange={handleInput} sx={{width:'80%'}} />
  </div>
</Grid>
<Grid item>
  <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
    <Typography sx={{marginRight:'20px',width:'100px'}}>Email</Typography>
    <TextField name="email" variant="standard" value={studentDetails.email} onChange={handleInput} sx={{width:'80%'}} />
  </div>
</Grid>

<Grid item>
  <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
    <Typography sx={{marginRight:'20px',width:'100px'}}>About</Typography>
    <TextField name="bio" variant="outlined" onChange={handleInput} multiline rows={4} sx={{width:'80%'}} />
  </div>
</Grid>
<Grid item>
  <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
    <Typography sx={{marginRight:'20px',width:'100px'}}>Link to Resume</Typography>
    <TextField name="resume" variant="outlined" onChange={handleInput} sx={{width:'80%'}} />
  </div>
</Grid>
<Grid item>
<div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
<Typography sx={{marginRight:'20px',width:'100px'}}>Add Skills</Typography>
< Autocomplete
        multiple
          id="grouped-demo"
          options={options.sort((a, b) => -b.stackType.localeCompare(a.stackType))}
          groupBy={(option) => option.stackType}
          getOptionLabel={(option) => option.title}
          sx={{ width: 'flex' }}
          renderInput={(params) => <TextField  className='border-none shadow-none' {...params} label="Add Tech Stacks"/>}
        fullWidth/>
</div>
</Grid>
<Grid item sx={{margin:'0 auto'}}>
<div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
    <Button type="submit" sx={{backgroundColor:'#3acbf7', marginTop:'20px'}}>Update</Button>

  </div>

</Grid>
</Grid> 

 
</form>)
};

export default EditDetails;
const jobFields = [
  {title: 'Angular',type: 'Frontend Frameworks' },
  {title: 'Vue.js',type: 'Frontend Frameworks' },
  {title: 'React',type: 'Frontend Frameworks' },
  {title: 'React Native',type: 'Frontend Frameworks' },
  {title: 'Next.js',type: 'Frontend-Frameworks'},
  {title: 'HTML-CSS',type: 'Frontend Frameworks' },
  {title: 'Express',type: 'Backend Frameworks'},
  {title: 'Django',type: 'Backend Frameworks'},
  {title: 'Laravel',type: 'Backend Frameworks'},
  {title: 'Flask',type: 'Backend Frameworks'},
  {title: 'Spring',type: 'Backend Frameworks'},
  {title: 'Ruby on Rails',type: 'Backend Frameworks'},
  {title: 'Node.js',type: 'Backend Frameworks'},
  {title: 'MongoDB',type: 'Database'},
  {title: 'MySQL',type: 'Database'},
  {title: 'PostgreSQL',type: 'Database'},
  {title: 'SQLite',type: 'Database'},
  {title: 'Firebase',type: 'Database'},
  {title: 'AWS',type: 'Cloud Platform'},
  {title: 'Google Cloud',type: 'Cloud Platform'},
  {title: 'Heroku',type: 'Cloud Platform'},
  {title: 'Digital Ocean',type: 'Cloud Platform'},
  {title: 'Netlify',type: 'Cloud Platform'},
  {title: 'Flutter',type: 'App Development'},
  {title: 'Java',type: 'App Development'},
  {title: 'Kotlin',type: 'App Development'},
  {title: 'Swift',type: 'App Development'},
  {title: 'Data Science',type: 'Machine Learning'},
  {title: 'Machine Learning',type: 'Machine Learning'},
  {title: 'Deep Learning',type: 'Machine Learning'},
  {title: 'Natural Language Processing',type: 'Machine Learning' },
  {title: 'Artificial Intelligence',type: 'Machine Learning'},
  {title: 'Computer Vision',type: 'Machine Learning'},
  {title: 'R',type: 'Machine Learning'},
  {title: 'Python',type:'Programming Language'},
  {title: 'C++',type:'Programming Language'},
  {title: 'C#',type:'Programming Language'},
  {title: 'JavaScript',type:'Programming Language'},
  {title: 'TypeScript',type:'Programming Language'},
  {title: 'PHP',type:'Programming Language'},
  {title: 'Go',type:'Programming Language'},
  {title: 'Rust',type:'Programming Language'},
  {title: 'UI/UX',type:'Design'},  
];