const User = require('../model/user');
const db = require('../config/db.js');

exports.getPage = async(req,res)=>{
    try{
        res.render('user',{

        })
    }
    catch(err){
        
    }
}
exports.getLogin = async(req,res)=>{
    try{
        res.render('login',{

        });
        
    }
    catch(err){
        
    }
}
exports.verifyLogin = async(req,res)=>{
    try{
        const {email,password} = req.body;
        const existingEmail = User.findOne({email});
        if(existingEmail){
         
        }
        return res.redirect('back');
    }
    catch(err){
        
    }
}
exports.createUser = async(req,res)=>{
    try{
        const {name,password,email} = req.body;
        const existingEmail = User.findOne({email})
            if(existingEmail){
                return res.send("Error email id is already present");
            }
            return User.create({username,email,password})
            const userCreated =  User.create({name,password,email});
            console.log('User Registered Successfully',userCreated);
            return res.redirect('back');
        
    }
    catch(err){
        console.log('error in creating a new user',err);
        return res.redirect('back');
    }
}

