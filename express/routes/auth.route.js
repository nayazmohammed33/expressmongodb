const express=require("express");
const router=express.Router();
const {logincontroller}=require("../controllers/auth.controller");



router.get("/",logincontroller);

module.exports=router;