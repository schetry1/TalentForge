const keys =require("./keys");
const passport=require('passport');
const GoogleStrategy = require("passport-google-oauth20");
const OutlookStrategy=require('passport-outlook');
const StudentUser=require("../models/StudentUser");
const CompUser=require("../models/CompUser");
const jwt= require('jsonwebtoken')
 

function SessionConstructor(userId, userGroup, details) {
  this.userId = userId;
  this.userGroup = userGroup;
  this.details = details;
}
passport.serializeUser(function (userObject, done) {
  // userObject could be a Model1 or a Model2... or Model3, Model4, etc.
  let userGroup = "model1";
  let userPrototype =  Object.getPrototypeOf(userObject);

  if (userPrototype === CompUser.prototype) {
    userGroup = "compmodel";
  } else if (userPrototype === StudentUser.prototype) {
    userGroup = "studentmodel";
  }

  let sessionConstructor = new SessionConstructor(userObject.id, userGroup, '');
  done(null,sessionConstructor);
});

passport.deserializeUser(function (sessionConstructor, done) {

  if (sessionConstructor.userGroup == 'compmodel') {
    CompUser.findOne({
        _id: sessionConstructor.userId
    }, function (err, user) { // When using string syntax, prefixing a path with - will flag that path as excluded.
        done(err, user);
    });
  } else if (sessionConstructor.userGroup == 'studentmodel') {
    StudentUser.findOne({
        _id: sessionConstructor.userId
    }, function (err, user) { // When using string syntax, prefixing a path with - will flag that path as excluded.
        done(err, user);
    });
  }

});





passport.use(
  new GoogleStrategy(
    {
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      console.log(profile);
      CompUser.findOne({googleId:profile.id}).then(
        (currentUser)=>{
          if(currentUser){
            console.log('user is '+currentUser);
            //serializing the user
            done(null, currentUser);
          }
          else{
            new CompUser({
              username: profile._json.name,
              email: profile._json.picture,
              googleId:profile.id,   
            }).save().then((newUser)=>{
              console.log("hiiiiiiii new Companyuser"+newUser);
              done(null, newUser);
            });
          }
        }
      )
    }
  )
);

// passport.serializeUser((user,done)=>{
//  done(null,user.id);
// });
// passport.deserializeUser((id,done)=>{   
//   CompUser.findById(id).then((user) => {
//     done(null, user);
// });
// });



// passport.serializeUser((user,done)=>{
//   done(null,user.id);
// });

// passport.deserializeUser((id,done)=>{   
//   StudentUser.findById(id).then((user) => {
//     done(null, user);
// });
// });

// passport.serializeUser((user,complete)=>{
//   var key={
//     id:user.id,
//     type: user.userType
//   }
//   complete(null,key)
// })

// passport.deserializeUser((key,complete)=>{
//   const Model=key.type===StudentUser?StudentUser:CompUser;
//   Model.findOne({
//     _id:key.id
//   }).then((user)=>{
//     complete(null,user)
//   })
// })




passport.use(new OutlookStrategy({
    clientID: keys.outlook.clientID,
    clientSecret: keys.outlook.clientSecret,
    callbackURL: '/auth/outlook/callback'
  },
  function(accessToken, refreshToken, profile, done) {
    var user = {
      outlookId: profile._json.Id,
      name: profile._json.DisplayName,
      email: profile._json.EmailAddress,
     // accessToken:  accessToken
  };
  //check if user already exist in our db
  StudentUser.findOne({outlookId:user.outlookId}).then(
    (currentUser)=>{
      if(currentUser){
//already hv d user
console.log('user is '+currentUser);
//serializing the user
done(null, currentUser);
      }
      else{
        new StudentUser({
          username: user.name,
          email: user.email,
          outlookId: user.outlookId,           
          profilePicture:"",
          rollno:"",
          branch:"",
          graduation:"",
          resume:"",
          bio:"",
          skills:"",
          linkedin:"",
          phone:""
          
        }).save().then((newUser)=>{
          console.log("hiiiiiiii new user"+newUser);
          done(null, newUser);
        });
      }
      
    }
  )
  }
));




