const dotenv = require('dotenv');
const express = require('express');
var cookies = require("cookie-parser");

const app = express();
app.use(cookies());
dotenv.config({path:'./config.env'});


const port = process.env.PORT || 5000;

// require('./db/conn'); /*moongoose connect to online db */

app.use(express.json());

app.use(require('./route/auth'));

// app.get("/",(req,res)=>{
//     res.send('Hello how are you');
// });

if(process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"));
    // const path = require("path");
    // app.get("*",(req,res)=>{
    //     res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    // });
}

app.listen(port, ()=>{
    console.log(`I am listening to port ${port}`)
});