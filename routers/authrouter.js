const router = require('express').Router();
const {signup,login}=require('../controller/authenticationcontroller');

router.post('/sign',signup);
router.post('/login',login);

module.exports=router;