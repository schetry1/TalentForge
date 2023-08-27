const mongoose=require('mongoose');
const Schema=mongoose.Schema;


let companySchema=new Schema({
    compname: {type: String,required:true},
    email:{type: String,required:false},
    location:{type: String,required:false},
    about:{type: String,required:false},
    website:{type: String,required:false},
    phone:{type: Number,required:false},
    linkedin:{type: String,required:false},
    image:{type: String,required:false},
});




const Company=mongoose.model('company',companySchema);

module.exports=Company;