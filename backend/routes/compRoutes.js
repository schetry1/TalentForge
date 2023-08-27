const express = require('express');
const router = express.Router();
const passport=require('passport');
const body = require('body-parser');
var encoder = body.urlencoded();
const UserModel=require('../models/students');
const compController=require('../controllers/compcontroller');
const multer = require("multer");
var path = require('path');

//image upload
var StorageComp = multer.diskStorage({
  destination:"./public/uploads/",
  filename:(req , file , cb) => {
    cb(null , file.fieldname+"_"+path.extname(file.originalname))
  }

 })

 var upload_company_logo = multer({
   storage:StorageComp
 }).single('company_logo');
  
  router.get('/' ,(req, res) => {
  
    res.render('./company/home' );
  
  })







//company registration routes

router.get("/profile" , compController.getcompDetails);

router.get("/profile/add" , compController.addcompForm);

router.post(
    "/profile",
    upload_company_logo,
    compController.postcompDetails
  );

  //opportunity routes

  router.get("/addopp" , compController.getoppDetails);

  router.get("/postopp" , compController.addoppForm);
  
  router.post(
      "/addopp",
      compController.postoppDetails
    );




module.exports = router;