const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema(
    {
        userId: { type: String, required: true },
        name:{type:String},
        about:{type:String},
        location:{type: String},
        domain:{type: String},
        yearOfFoundation:{type: String},
        phone:{type:String},
        email:{type:String},
        website:{type:String},
        logo:{type:String},
        linkedin:{type:String},
        visit: {type: Boolean,default: false}
    },
    { timestamps: true }
  );
  
  module.exports = mongoose.model("Company", CompanySchema);