const express = require('express');
const session = require('express-session');
const port = 7000;
const app = express();
const path = require('path');
const db = require('./config/db.js');
const userRouter = require('./routes/user');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'view'));

app.use(session({
    secret:'1234567890',
    resave:false,
    saveUninitialized:true
}));

app.use(express.urlencoded());
app.use('/',userRouter);



app.listen(port,function(err){
    if(err){
        console.log("Error is running on server");
    }
    console.log(`Server is running on port ${port}`);
})