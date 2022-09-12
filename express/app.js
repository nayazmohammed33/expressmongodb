const express=require("express");
const app=express();

const authrouter=require("./routes/auth.route");
const crudrouter=require("./routes/crud.routes");

app.set('view engine','ejs');
app.use(express.json());

app.use("/auth",authrouter);
app.use("/crud",crudrouter);

module.exports=app;
