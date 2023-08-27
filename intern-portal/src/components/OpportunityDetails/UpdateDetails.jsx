import React from 'react';

const UpdateDetails = () => {
  return  <Container className={classes.container}>
  <form action="/jobs" method="POST"  style={{marginTop:'0.5rem'}}  className={classes.form} autoComplete="on">
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
      style={{marginLeft:"2rem"}}
       type="button"
        variant="outlined"
        color="secondary"
        onClick={() => setOpen(false)}
      >
        Cancel
      </Button>
      <Button
     
        variant="outlined"
        color="primary"
        style={{ marginRight: 20 }}
        onClick={()=>{setOpenAlert(true)
          setOpen(false)
         updateDetails()
        }}
      >
          Edit Details
          </Button>
    </div>
  </form>
</Container>;
};

export default UpdateDeta
ils;
