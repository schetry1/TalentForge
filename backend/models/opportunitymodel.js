const mongoose=require('mongoose');
const Schema=mongoose.Schema;


let opportunitySchema=new Schema({
    jobname:{type: String,required:true},
    duration:{type: String,required:false},
    location:{type: String,required:false},
    stipend:{type: String,required:false},
    requirements:{type: String,required:false},
    tags:{type: String,required:false},
    process:{type: String,required:false},
    link:{type: String,required:false},
    perks:{type: String,required:false},
    openings:{type: Number,required:false},
    info:{type: String,required:false},
});




const Opportunity=mongoose.model('opportunity',opportunitySchema);

module.exports=Opportunity;