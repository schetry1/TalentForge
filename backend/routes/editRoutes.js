var express = require('express');
var router = express.Router();
var multer  = require('multer');
var path = require('path');
const body = require('body-parser');
var encoder = body.urlencoded();
const UserModel=require('../models/students');
const ProfileController=require('../controllers/profile');

// router.post('/todos',ProfileController.authCheck,ProfileController.insertTask);


router.get('/edit' ,ProfileController.authCheck,(req, res) => {
  
    res.render('edit' , {user:req.user});
  
  })

//Pic Upload ////
var Storage = multer.diskStorage({
    destination:"./public/uploads/",
    filename:(req , file , cb) => {
      cb(null , file.fieldname+"_"+req.user.email+path.extname(file.originalname))
    }
  
   })
  
   var upload = multer({
     storage:Storage
   }).single('profile_pic');
  
  
   router.post("/profile_pic" , upload , async(req,res)=>{
  
    var pic = "uploads/" + req.file.filename;
    
    UserModel.findOneAndUpdate(
            {email : req.user.email} , 
            {$set: {
      
              pic:pic,
             
      
            }}
        )
            .then((data) => {
                res.render('done' , {title:"Done" , msg : "Profile Picture updated"})
            })
            .catch((err) => {
              console.log(err);
                res.render('error' );
            });
  
  
   })
////////////


//// Resume Upload ////
var Storage_cv = multer.diskStorage({
  destination:"./public/cv/",
  filename:(req , file , cb) => {
    cb(null , file.fieldname+"_"+req.user.email+path.extname(file.originalname))
  }

 })

 var upload_cv = multer({
   storage:Storage_cv
 }).single('cv_upload');


 router.post("/cv_upload" , upload_cv , async(req,res)=>{

  var cv = "cv/" + req.file.filename;
  
  UserModel.findOneAndUpdate(
          {email : req.user.email} , 
          {$set: {
            resume:cv
          }}
      )
          .then((data) => {
              res.render('done' , {title:"Done" , msg : "CV Uploaded"})
          })
          .catch((err) => {
            console.log(err);
              res.render('error' );
          });


 })
////////////



//// Information Update ////
 router.post("/edit_done" ,encoder, async(req,res)=>{

  var branch = req.body.branch;
  var phone = req.body.phone;
  var roll = req.body.roll;
  var graduation = req.body.graduation;
  var skills = req.body.skills;
  var linkedin = req.body.linkedin;
  var bio = req.body.bio;
  
  UserModel.findOneAndUpdate(
          {email : req.user.email} , 
          {$set: {
            branch:branch,
            bio:bio,
            phone:phone,
            graduation:graduation,
            skills:skills,
            linkedin:linkedin,
            roll:roll,
          }}
      )
          .then((data) => {
              res.render('done' , {title:"Done" , msg : "Information Updated"})
          })
          .catch((err) => {
            console.log(err);
              res.render('error' );
          });


 })
////////////





module.exports = router;
