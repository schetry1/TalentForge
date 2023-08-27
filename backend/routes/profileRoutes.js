var express = require('express');
var router = express.Router();


const UserModel=require('../models/students');
const ProfileController=require('../controllers/profile');


router.get('/',ProfileController.authCheck,ProfileController.profilePage);
// router.post('/todos',ProfileController.authCheck,ProfileController.insertTask);

/* GET users listing. */


module.exports = router;
