var user = require('../models/user')
var express = require('express')

var router = express.Router();

router.get('/', function (req, res, next) {

    user.find({},{username:1},(err, docs) => {
        if (err) res.json({ msg: "Error unable to find user" })
        else {
            res.json(docs)
        }
    })

})

router.get('/login', function (req, res, next) {

    user.find((err,docs)=>{
        if (err) res.json({ msg: "Error unable to find user" })
            else {
                res.json(docs)
            }
    })

})

router.post('/signup', function (req, res, next) {

    var newUser=new user(req.body)
    newUser.save((err,data)=>{
        if(err) res.json(err)
            else res.json({msg:'user registered',data:data})
    })

})




module.exports = router