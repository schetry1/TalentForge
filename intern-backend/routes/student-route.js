const StudentUser= require("../models/StudentUser");
const Job=require("../models/Jobs")
const router = require("express").Router();

//update user
router.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id ) {
     
      try {
        const student = await StudentUser.findByIdAndUpdate(req.params.id, {
          $set: req.body,
        },
        {new:true});
        res.status(200).json(student);
      } catch (err) {
        return res.status(500).json(err);
      }
    } else {
      return res.status(403).json("You can update only your account!");
    }
  });

  //// application status
  router.put("/:id/status",async(req,res)=>{
      try{
         StudentUser.findOne(applicants)
      }catch(err){

      }
  })
  // const itemId = 2;
  // const query = {
  //   item._id: itemId 
  // };
  // Person.findOne(query).then(doc => {
  //   item = doc.items.id(itemId );
  //   item["name"] = "new name";
  //   item["value"] = "new value";
  //   doc.save();
  
  //   //sent respnse to client
  // }).catch(err => {
  //   console.log('Oh! Dark')
  // });




module.exports =router;