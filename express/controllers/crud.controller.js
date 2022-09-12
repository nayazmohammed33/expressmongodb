const User=require("../models/user");
const getdata=(req,res)=>{

    User.find().then(data=>{
        res.json({
            message:"success",
            data:data
        })
    }).catch(err=>{
        console.log(err);
    })

    

}


const savedata=(req,res)=>{

    
    
        // const user=new User({
        //     name: req.body.name,
        //     email :req.body.email,
        //     password: req.body.password
        // })
        
        const user=new User(req.body);
    
        user.save().then(result=>{
    
            res.json({
                message:"Success",
                data:result
            })
    
        }).catch(err=>{
            console.log(err);
    
        })
      
    
    
    }


    const updateData=(req,res)=>{
    
    
        User.updateMany({name:req.body.name},{$set:{email:req.body.email}}).then(result=>{
            res.json({
                message:"Update Success",
                data:result
            })
        }).catch(err=>{
            console.log(err);
        })
    
    }

    

    const deleteData=(req,res)=>{

        User.deleteMany({name:req.body.name}).then(result=>{
    
            res.json({
                message:"SuccessFully Deleted",
                data:result
            })
    
        }).catch(err=>{
            console.log(err);
        })
    
    }


module.exports={
    getdata,
    savedata,
    updateData,
    deleteData
}