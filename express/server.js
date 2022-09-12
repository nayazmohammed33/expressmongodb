const app=require("./app");
require('dotenv').config({
    path:"../.env"
})
const port=process.env.port || 9090;
const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://dontmess:Qwer123@cluster0.mlu5arb.mongodb.net/?retryWrites=true&w=majority").then(data=>{
    console.log("Mongodb connected");
}).catch(err=>{
    console.log(err);
})


app.listen(port, function(){
    console.log(`server is running at ${port} `);
})