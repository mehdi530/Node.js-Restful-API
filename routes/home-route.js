const express =require('express')
const router = express.Router()
const homecontroller =require('../controller/home-controller');
const gethome = require('../controller/home-controller');

router.get("/", homecontroller.gethome );
  
module.exports=router