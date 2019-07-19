//importing
var express = require('express')
var md5=require('md5')
//Importing route
var router = express.Router();
var user=require('../models/user')

router.post('/login',function(req,res,next){

    user.find({username:req.body.username},(err,data)=>{
        if(err) res.json(err)
        var pass=req.body.password;
        var authkey1="",role1=""
        pass=md5(pass)
        console.log(pass)
        console.log(data)
        console.log({username:data.username})
        console.log(data.password)
        if(data.password===pass)
        {
            console.log("hit")
            var authkey=md5(req.body.username+req.body.password+Math.random())
            user.findOneAndUpdate({username:req.body.username},{authkey:authkey},(err,doc)=>{
                if(err) res.json(err)
                authkey1=doc.authkey;
                role1=doc.role
                console.log(doc)
            })            
        }

         res.json({role:role1,authkey:authkey1})
    })
})

router.post('/',function(req,res,next){


    var pass=req.body.password;
    pass=md5(pass)
    var authkey=md5(req.body.username+req.body.password+Math.random())
    var newUser=new user({
        username:req.body.username,
        password:pass,
        role:req.body.role,
        authkey:authkey
    })

    newUser.save((err,doc)=>{
        if(err) res.json(err)
        else res.json(doc)
    })
    
})

module.exports=router
