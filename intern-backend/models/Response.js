const mongoose = require("mongoose");

const ResponseSchema = new mongoose.Schema(
    {
    studentId:{type:String},
    status:{type:String,
    default:"pending"},
    message:{type:String}
    },
    { timestamps: true }
  );
  
  module.exports = mongoose.model("Response", ResponseSchema);