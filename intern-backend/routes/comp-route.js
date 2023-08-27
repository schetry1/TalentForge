const router = require("express").Router();
const Company=require('../models/Comp');
const CompanyUser=require('../models/CompUser')
const { post } = require("./jobscart-route");

//get company
router.get("/:id",async(req,res)=>{
    try{
        const company=await Company.findOne({userId:req.params.id});
        res.status(200).json(company);
    }catch(err){
        res.status(500).json(err);
    }
}) 

//register company
router.post("/register",async(req,res)=>{
    const newCompany= new Company(req.body);
    try{
     const savedCompany=await newCompany.save();
     res.status(200).json(savedCompany);
     
    }catch(err){
        res.status(500).json(err);
    }
  });

  //update company

  router.put("/:id", async (req, res) => {
    try {
      const company = await Company.findById(req.params.id);
      if (company.userId === req.body.userId) {
        try {
          const updatedCompany = await Company.findByIdAndUpdate(
            req.params.id,
            {
              $set: req.body,
            },
            { new: true }
          );
          res.status(200).json(updatedCompany);
        } catch (err) {
          res.status(500).json(err);
        }
      } else {
        res.status(401).json("You can update only your company!");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //GET ALL
  router.get("/",async(req,res)=>{
    try{
        const companies=await Company.find();
        res.status(200).json(companies);
    }catch(err){
res.status(500).json(err);
    }
});
  
  module.exports =router;