const express=require("express");
const router=express.Router();
const {deleteData,updateData,savedata,getdata}=require("../controllers/crud.controller")

router.get("/",getdata);
router.post("/save",savedata);
router.put("/update",updateData);
router.delete("/deleteMany",deleteData);


module.exports=router;