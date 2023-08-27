var TodoModel=require('../models/todo');
var UserModel=require('../models/students');
var express = require('express');


//this fun is to check if,someone is logged-in in the page, if yes, redirect to profile page, else redirect to login page
//middleware function, that's gonna set in before profile page is redirected
var authCheck=(req,res,next)=>{
    if(!req.user){
      //if user isn't logged in 
      res.redirect('/auth/login');
 
    }
    else{
      //if logged in
     next();
    }
 };

 var profilePage= (req, res)=> {
  
var user=req.user;

var id=user._id;
  UserModel.findById(id).then(function(results){
            // console.log("Showing Todos \n ",results);

            
           // console.log('Printing All todos  '+todos);
            
            
            
          res.render('profile',{user:user});
 }
);
 }
 

 module.exports = {
  authCheck,
  profilePage,
  };

