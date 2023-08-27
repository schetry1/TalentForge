import MuiAlert from "@material-ui/lab/Alert";
import { Button,Container,Fab,FormControlLabel,FormLabel,makeStyles, MenuItem,Modal,Radio,RadioGroup,Snackbar,TextField,Tooltip, } from "@material-ui/core";
import React, { useContext, useRef } from 'react';
import { useEffect,useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from "axios";
import AddIcon from '@mui/icons-material/Add';
import { CompanyContext } from "../../context/CompanyContext";
import DateAdapter from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
const useStyles = makeStyles((theme) => ({

 
    
  container: {
    width: 1000,
    height: 1100,
    backgroundColor: "white",
    position: "absolute",
    top: 400,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      height: "110vh",
    },
  },
  form: {
    padding: theme.spacing(2),
  },
  item: {
    marginBottom: theme.spacing(1),
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}



const JobModal = ({child}) => {
 
  const [date, setDate] = React.useState(null);
  const [company,setCompany]=useContext(CompanyContext);
  
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const [openAlert, setOpenAlert] = useState(false);
  

  const handleClose = (event, reason) => {
    setOpen(false);
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };
  const options = jobFields.map((option) => {
    const stackType = option.type;
    return {
        stackType: stackType,
      ...option,
    };
  });

  const[text,setText]=useState({company:'',
  profile:'',
  duration:'',
  location:'',
  stipend: '',
  applyby: {date},
  type:'',
  mode:'',
  whocanapply:'',
  aboutjob:'',
  noofopening:'',
  perks:'',
  phone:'',
  tags:[]
})
const handleInput=(e)=>{
  const name= e.target.name;
  const value=e.target.value;

  setText({...text, [name]:value})
}




const submitHandler=async()=>{

const newJob={
  userId:company.userId,
  compId:company._id,
  company:text.company,
  profile:text.profile,
  duration:text.duration,
  location:text.location,
  stipend: text.stipend,
  type:text.type,
  mode:text.mode,
  applyby:text.applyby,
  whocanapply:text.whocanapply,
  aboutjob:text.aboutjob,
  noofopening:text.noofopening,
  perks:text.perks,
  phone:text.phone,
  tags:text.tags
}

try{
await axios.post("/jobs",newJob);
console.log(newJob)
console.log("JOB POSTED");
setOpenAlert(true)
setOpen(false)

console.log(newJob)
}catch(err){
console.log(err);
}
}


  return (
    <div>
       <Button  variant="outlined" color="#03a9f4" onClick={() => setOpen(true)} sx={{backgroundColor:'#3acbf7', marginRight:'10px',marginBottom:'20px'}}>
                        {child}
                    </Button>
    
<Modal style={{overflow:'scroll'}} open={open}
        onClose={handleClose}>
    <Container className={classes.container}>
        <h2 style={{display:'flex', justifyContent:'center'}}>Post an Opportunity</h2>
      <form onSubmit={submitHandler}   style={{marginTop:'0.5rem'}}  className={classes.form} autoComplete="on">
        <div className={classes.item}>
          <TextField
          name='company'
          value={text.company}
          onChange={handleInput}
            id="standard-basic"
            label="Company"
            size="small"
            style={{ width: "100%" }}
          />
        </div>
        <div className={classes.item}>
          <TextField
          name='profile'
          value={text.profile}
          onChange={handleInput}
            id="standard-basic"
            label="Profile"
            size="small"
            style={{ width: "100%" }}
          />
        </div>
        <div className={classes.item}>
          <TextField
          name="duration"
          value={text.duration}
          onChange={handleInput}
            id="standard-basic"
            label="Duration"
            size="small"
            style={{ width: "100%" }}
          />
          </div>
        <div className={classes.item}>
          <TextField
          name="location"
          value={text.location}
        onChange={handleInput}
            id="standard-basic"
            label="Location"
            size="small"
            style={{ width: "100%" }}
          />
        </div>
        <div className={classes.item}>
          <TextField
          name="stipend"
          value={text.stipend}
        onChange={handleInput}
            id="standard-basic"
            label="Stipend"
            size="small"
            style={{ width: "100%" }}
          />
        </div>
        <div className={classes.item}>
        <LocalizationProvider dateAdapter={DateAdapter}>
          <DatePicker
            name="applyby"
            label="Apply By"
            value={date}
            onChange={(newDate) => {
              setDate(newDate);
            }}
            renderInput={(params) => <TextField {...params} fullWidth/>}
          />
        </LocalizationProvider>
          {/* <TextField
          
          value={text.applyby}
        
            id="standard-basic"
            label="Location"
            size="small"
            style={{ width: "100%" }}
          /> */}
        </div>
        <div className={classes.item}>
          {/* <TextField
          name="type"
          value={text.type}
          onChange={handleInput}
            id="standard-basic"
            label="Type"
            size="small"
            style={{ width: "100%" }}
          /> */}
          <InputLabel id="demo-simple-select-label" sx={{marginTop:'10px',marginBottom:'5px'}}>Type</InputLabel>
          <Select
            name="type"
            labelId="demo-simple-select-label"
            id="standard-basic"
            value={text.type}
            label="Type"
            style={{ width: "100%"}}
            onChange={handleInput}
          >
            <MenuItem value={'Internship'}>Internship</MenuItem>
            <MenuItem value={'Full Time'}>Full Time</MenuItem>
        </Select>
        <div className={classes.item}>
        <InputLabel id="demo-simple-select-label" sx={{marginTop:'10px',marginBottom:'5px'}}>Mode</InputLabel>
          <Select
            name="mode"
            labelId="demo-simple-select-label"
            id="standard-basic"
            value={text.mode}
            label="Mode"
            style={{ width: "100%"}}
            onChange={handleInput}
          >
            <MenuItem value={'Remote'}>Remote</MenuItem>
            <MenuItem value={'In-Person'}>In Person</MenuItem>
        </Select>
        </div>
        </div>  <div className={classes.item}>
          <TextField
          name="whocanapply"
          value={text.whocanapply}
          onChange={handleInput}
            id="standard-basic"
            label="Who Can Apply"
            size="small"
            style={{ width: "100%" }}
          />
        </div>
        
        <div className={classes.item}>
          <TextField
          name="aboutjob"
          value={text.aboutjob}
          onChange={handleInput}
            id="outlined-multiline-static"
            multiline
            rows={2}
            variant="outlined"
            label="About Job"
            size="small"
            style={{ width: "100%" }}
          />
        </div>
        <div className={classes.item}>
          <TextField
          name="noofopening"
          value={text.noofopening}
        onChange={handleInput}
            id="standard-basic"
            label="No of opening"
            size="small"
            style={{ width: "100%" }}
          />
        </div>
        <div className={classes.item}>
          <TextField
          name="perks"
          value={text.perks}
          onChange={handleInput}
            id="standard-basic"
            label="Perks"
            size="small"
            style={{ width: "100%" }}
          />
        </div>
        <div className={classes.item}>
          <TextField
          name="phone"
          value={text.phone}
          onChange={handleInput}
            id="standard-basic"
            label="Contact"
            size="small"
            style={{ width: "100%" }}
          />
        </div>
        <div className={classes.item} style={{marginBottom:'20px'}}>
        <Autocomplete
        multiple
          id="grouped-demo"
          options={options.sort((a, b) => -b.stackType.localeCompare(a.stackType))}
          groupBy={(option) => option.stackType}
          getOptionLabel={(option) => option.title}
          sx={{ width: 'flex' }}
          renderInput={(params) => <TextField  className='border-none shadow-none' {...params} label="Add Tech Stacks"/>}
        />
        </div>
        <div className={classes.item}>
          <Button
            variant="outlined"
            color="primary"
            style={{ marginRight: 20 }}
            type="submit"
          >
            Post Job
          </Button>
          <Button
           type="button"
            variant="outlined"
            color="secondary"
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
        </div>
      </form>
    </Container>
  </Modal>
  <Snackbar
    open={openAlert}
    autoHideDuration={4000}
    onClose={handleClose}
    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
  >
    <Alert onClose={handleClose} severity="success">
      This is a success message!
    </Alert>
  </Snackbar>
</div>
  );
};

export default JobModal;

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