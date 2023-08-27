const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
    { userId:{type:String},
      compId:{type:String, required:true},
      company: {type:String, },
      profile:{type:String},
      location:{type:String},
      stipend:{type:String},
      applyBy:{type: Date},
      aboutRole:{type: String},
      duration:{type:String}, 
      whocanapply:{type:String},
      aboutjob:{type:String},
      type:{type:String},
      mode:{type:String},
      noofopening:{type:Number},
      perks:{type: Array,
        default: [] },
      phone:{type:String},
      requirements:{type: Array,
        default: [] },
      phone:{type:String},
      applicants:{
        type: Array,
        default: []
      },
      tags:{
        type: Array,
        default: []
      }
    },
    { timestamps: true }
  );
  
  module.exports = mongoose.model("Job", JobSchema);