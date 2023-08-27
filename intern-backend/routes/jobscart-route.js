const router = require("express").Router();
const Job=require('../models/Jobs');
const StudentUser=require('../models/StudentUser')
const Response=require('../models/Response');

//CREATE JOBS
router.post("/",async(req,res)=>{
  const newJob= new Job(req.body);
  try{
   const savedjob=await newJob.save();
   res.status(200).json(savedjob);
  }catch(err){
      res.status(500).json(err);
  }
});

//update
router.put("/:id",async(req,res)=>{
    try{
        const job=await Job.findById(req.params.id);
        if(job.userId==req.body.userId){
            const updatedJob=await Job.findByIdAndUpdate(
                req.params.id,{
                    $set:req.body
                },
                {new:true}
            );
            res.status(200).json(updatedJob);
        }
    }catch(err){
        res.status(500).json(err);
    }
});

//DELETE
router.delete("/:id",async(req,res)=>{
    try{
        const job=await Job.findById(req.params.id)
        if(job.userId==req.body.userId){
            await Job.findByIdAndDelete(req.params.id);
            res.status(200).json("Job has been deleted");
        }    
    }catch(err){
        res.status(500).json(err);
    }
});

//GET USER JOBS
router.get('/find/:compId',async(req,res)=>{
    try{
        const job=await Job.find({compId: req.params.compId});
        res.status(200).json(job);
    }catch(err){
        res.status(500).json(err)
    }
});

//GET ALL
router.get("/",async(req,res)=>{
    try{
        const jobs=await Job.find();
        res.status(200).json(jobs);
    }catch(err){
res.status(500).json(err);
    }
});

//GET JOB
router.get("/:id", async (req, res) => {
    try {
      const job = await Job.findById(req.params.id);
      res.status(200).json(job);
    } catch (err) {
      res.status(500).json(err);
    }
  });

    //apply / undo apply a job

// router.put("/:id/apply", async (req, res) => {
//     try {
//       const job = await Job.findById(req.params.id);
//       if (!job.applicants.includes(req.body.userId)) {
//         await job.updateOne({ $push: { applicants: req.body.userId } });
//         res.status(200).json("Applied successfully");
//       } else {
//         await post.updateOne({ $pull: { applicants: req.body.userId } });
//         res.status(200).json("Undo applied status");
//       }
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

  /////apply
  router.put("/:id/apply", async (req, res) => {
      try {
        const job = await Job.findById(req.params.id);
        const currentUser = await StudentUser.findById(req.body.userId);
        if (!job.applicants.includes(req.body.userId)) {
          await job.updateOne({ $push: { applicants: req.body.userId } });
          await currentUser.updateOne({ $push: { jobsApplied: req.params.id } });
         
          res.status(200).json("applid sucessfully");
        } else {
          res.status(403).json("you have already applied");
        }
      } catch (err) {
        res.status(500).json(err);
      }
   
  });



////undo apply
  router.put("/:id/undo", async (req, res) => {
    
      try {
        const job = await Job.findById(req.params.id);
        const currentUser = await StudentUser.findById(req.body.userId);
        if (job.applicants.includes(req.body.userId)) {
          await job.updateOne({ $pull: { applicants: req.body.userId } });
          await currentUser.updateOne({ $pull: { jobsApplied: req.params.id } });
          res.status(200).json("withrdeawn application");
        } else {
          res.status(403).json("you have not applied");
        }
      } catch (err) {
        res.status(500).json(err);
      }
    
  });

  //// applied students
  router.get("/:jobid/response",async(req,res)=>{
    try{
      const job= await Job.findById(req.params.jobid);
      const ids=job.applicants;
      const records = await StudentUser.find({ '_id': { $in: ids } },{username:1,skills:1,profilePicture:1,email:1,degree:1,branch:1});
      res.status(200).json(records);
    }catch(err){
     res.status(500).json(err)
    }
  } )



module.exports = router;