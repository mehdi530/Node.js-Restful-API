const express=require('express')
const approute=express()
const appcontroller = require('../controller/user-controller')


//Show all List
approute.get("/",appcontroller.showalluser);
  
  // Select by id
  approute.get("/:id",appcontroller.userselect);
  
  // add new
  approute.post("/", appcontroller.useraddnew);
  
  // update name
  
  approute.put(":/id", appcontroller.userupdate);
  
  /// delet
  
  approute.delete("/:id", appcontroller.userdelet);

  module.exports=approute
