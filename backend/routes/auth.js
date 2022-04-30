const express= require('express');
const User=require('../models/User')
const router= express.Router();


//Create a User using: POST "/api/auth/".Doesn't require Auth
router.post('/',(req,res)=>{
 try {
  console.log(req.body);
  const user=User(req.body);
  user.save();
  const response={
    message:"user created successfully",
    data:user
  }
  res.send(response);
 } catch (error) {
  throw error 
 }
})


module.exports=router;