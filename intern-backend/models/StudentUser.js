const mongoose = require("mongoose");

const StudentUserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
    
      min: 3,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
     
      max: 50,
      unique: true,
    },
   
    outlookId: {
    type: String
    },
    profilePicture: {
      type: String,
      default: "",
    },  
    rollno:{
      type: Number,
      default:'',
      required: false,
    },
    location:{type: String,default:'',required:false},
    degree :{type: String,default:'',required:false},
    branch:{type: String,default:'',required:false},
    graduation:{type: Number,default:'',required:false},
    resume:{type: String,default:'',required:false},
    bio:{type: String,default:'',required:false},
    skills:{type: String,default:'',required:false},
    linkedin:{type: String,default:'',required:false},
    phone:{type: Number,default:'',required:false},
    jobsApplied:{
      type:Array,
      default:[]
    }

},
  { timestamps: true }
);

module.exports = mongoose.model("StudentUser", StudentUserSchema);


