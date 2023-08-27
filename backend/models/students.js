const mongoose=require('mongoose');
const Schema=mongoose.Schema;


let userSchema=new Schema({
    outlookId: {type: String,required:true},
    username:{type: String,required:false},
    email:{type: String,required:false},
    pic:{type: String,required:false},
    roll:{type: Number,required:false},
    branch:{type: String,required:false},
    graduation:{type: Number,required:false},
    resume:{type: String,required:false},
    bio:{type: String,required:false},
    skills:{type: String,required:false},
    linkedin:{type: String,required:false},
    phone:{type: Number,required:false},

});




const User=mongoose.model('user',userSchema);

module.exports=User;