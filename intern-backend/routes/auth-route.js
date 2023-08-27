
const router = require("express").Router();
const passport= require("passport");
const StudentUser = require("../models/StudentUser");
const CompanyUser=require('../models/CompUser');


router.get("/getuser",(req,res)=>{
  res.send(req.user)
  console.log(req.user);
 
})




router.get("/login/failed",(req,res)=>{
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

router.get("/login/success", (req, res)=>{
  if(req.user){
    res.status(200).json({
      success: true,
      message: "successful",
      user: req.user,
    })
    
  }
  
})

router.get("/logout",(req,res)=>{
 req.logout();
 res.redirect("http://localhost:3000/");
})

router.get('/outlook',
  passport.authenticate('windowslive', {
    scope: [
      'openid',
      'profile',
      'offline_access',
      'https://outlook.office.com/Mail.Read'

    ]
  })
);

const CLIENT_URL="http://localhost:3000/student/landing"


router.get('/outlook/callback', 
  passport.authenticate('windowslive', { failureRedirect: '/login/failed',
  successRedirect: CLIENT_URL
}));


router.get("/google", passport.authenticate("google", { scope: ["profile"] }));



router.get(
  "/google/callback",
  passport.authenticate("google",{  failureRedirect: "/login/failed",}),
  function(req, res) {
    // Successful authentication, redirect profile.
    res.redirect(`http://localhost:3000/company/register`);
    //res.render('Outlook Succedd');
  }
);


//   const prevUser=CompanyUser.findOne({googleid:req.user.googleid})
  //   if(prevUser){
  //     res.redirect(`http://localhost:3000/company/${prevUser._id}`)
  //   }
  //   else{
  //     res.redirect(`http://localhost:3000/company/register`)
  //}

 //// Information Update ////
 router.post("/student/edit" , async(req,res)=>{

  var branch = req.body.branch;
  var phone = req.body.phone;
  var rollno = req.body.roll;
  var yearofgraduation = req.body.graduation;
  var skills = req.body.skills;
  var linkedin = req.body.linkedin;
  var username = req.body.username;
  
  StudentUser.findOneAndUpdate(
          {outlookId : req.user.outlookId} , 
          {$set: {
            username:username,
            rollno:rollno,
            branch:branch,
            yearofgraduation:yearofgraduation,
            linkedin:linkedin,
            
          }}
      )
          .then((data) => {
              console.log("update suscessfull")
          })
          .catch((err) => {
            console.log(err);
              res.render('error' );
          });


 })


 module.exports = router;