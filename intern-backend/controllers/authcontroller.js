const passport=require('passport');

function checkAuthenctication(req,res,next){
    if(req.isAuthecticated()){
        return next()
    }
    res.redirect("./login")
}

module.exports= checkAuthenctication;