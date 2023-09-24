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
// const bcrypt = require('bcrypt');
exports.verifyLogin = async(req,res)=>{
    try{
        const {email,password} = req.body;
        const existingEmail = await User.findOne({email});
        if(!existingEmail){
            return res.status(401).json({error: 'Invalid email or password'});
        }
        if(existingEmail.password == password){
            console.log("ACCEPTED");
        }
        else{
            console.log("Not Accepted");
        }
        // const passwordMatch = await bcrypt.compare(password,existingUser.password);
        return res.redirect('back');
    }
    catch(err){
        console.error('Error in verifying login:', err);
        return res.redirect('back');
    }
}
exports.createUser = async(req,res)=>{
    try{
        const {name,password,email} = req.body;
        const existingEmail = await User.findOne({email})
            if(existingEmail){
                return res.send("Error email id is already present");
            }
        const userCreated = await User.create({name,password,email});
        console.log('User Registered Successfully',userCreated);
        return res.redirect('back');
        
    }
    catch(err){
        console.log('error in creating a new user',err);
        return res.redirect('back');
    }
}

