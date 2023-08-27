import MuiAlert from "@material-ui/lab/Alert";
import { Button,Container,Fab,FormControlLabel,FormLabel,makeStyles, MenuItem,Modal,Radio,RadioGroup,Snackbar,TextField,Tooltip, } from "@material-ui/core";
import React, { useContext, useRef } from 'react';
import { useEffect,useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from "axios";
import AddIcon from '@mui/icons-material/Add';
import { CompanyContext } from "../../context/CompanyContext";
import { UserJobContext } from "../../context/UserJobsContext";
import { IconButton } from "@mui/material";
import Edit from "@mui/icons-material/Edit";




const useStyles = makeStyles((theme) => ({

 
    
  container: {
    width: 500,
    height: 550,
    backgroundColor: "white",
    position: "absolute",
    top: 0,
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





const JobModal = () => {
 



 const[job,setJob]=useContext(UserJobContext);

  const classes = useStyles();
const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };



const handleInput=(e)=>{
  const name= e.target.name;
  const value=e.target.value;

  setJob({...job, [name]:value})
}




const updateDetails= async()=>{
   try{
await axios.put(`/jobs/${job._id}`,{
    
  userId:job.userId,
  compId:job.compId,
  company:job.company,
  profile:job.profile,
  duration:job.duration,
  whocanapply:job.whocanapply,
  aboutjob:job.aboutjob,
  noofopening:job.noofopening,
  perks:job.perks,
  phone:job.phone
    
});
window.location.reload();
   }catch(err){
console.log(err);
   }
  
  
   
  }




// const submitHandler=async()=>{

// const newJob={
//   userId:job.userId,
//   compId:job.compId,
//   company:text.company,
//   profile:text.profile,
//   duration:text.duration,
//   whocanapply:text.whocanapply,
//   aboutjob:text.aboutjob,
//   noofopening:text.noofopening,
//   perks:text.perks,
//   phone:text.phone
// }

// try{
// await axios.post("/jobs",newJob);
// console.log("JOB POSTED");
// window.location.reload();
// console.log(newJob)
// }catch(err){
// console.log(err);
// }
// }

  return (
    <div>
        <IconButton  onClick={() => setOpen(true)}  aria-label="Edit Profile" className="edtbtn">
            <Edit />
        </IconButton>
      
    
<Modal style={{overflow:'scroll'}} open={open}>
    <Container className={classes.container}>
      <form    style={{marginTop:'0.5rem'}}  className={classes.form} autoComplete="on">
        <div className={classes.item}>
          <TextField
          name='company'
          value={job.company}
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
          value={job.profile}
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
          value={job.duration}
          onChange={handleInput}
            id="standard-basic"
            label="Duration"
            size="small"
            style={{ width: "100%" }}
          />
        </div>  <div className={classes.item}>
          <TextField
          name="whocanapply"
          value={job.whocanapply}
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
          value={job.aboutjob}
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
          value={job.noofopening}
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
          value={job.perks}
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
          value={job.phone}
          onChange={handleInput}
            id="standard-basic"
            label="Contact"
            size="small"
            style={{ width: "100%" }}
          />
        </div>
        <div className={classes.item}>
        
          
          <Button
          
           type="button"
            variant="outlined"
            color="secondary"
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="outlined"
            color="primary"
            style={{ marginRight: 20 }}
            onClick={()=>{setOpenAlert(true)
            
             updateDetails()
            }}
          >
              Edit Details
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
