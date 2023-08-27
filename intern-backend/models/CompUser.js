const mongoose = require("mongoose");

const CompUserSchema = new mongoose.Schema(
    {
      username: {type:String, },
      email:{type:String,unique:true},
      googleId:{type:String}, 
    },
    { timestamps: true }
  );
  
  module.exports = mongoose.model("CompUser", CompUserSchema);