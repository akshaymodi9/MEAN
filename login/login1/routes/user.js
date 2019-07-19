//importing
var express = require('express')

//Importing route
var router = express.Router();
var user=require('../models/user')

router.get('/:user',function(req,res,next){

    user.find(req.params.user,(err,data)=>{
        if(err) res.json(err)
        else res.json(data)
    })
})

module.exports=router
