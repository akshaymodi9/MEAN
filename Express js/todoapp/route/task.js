//importing
var express = require('express')
var task=require('../models/task')

//Importing route
var router = express.Router();

//tast routes

router.get('/addtask', function (req, res, next) {
    res.render("addtask")
})

router.post('/addtask',function(req,res,next){

    var newTask = new task({

        taskname:req.body.taskname,
        description:req.body.description,
        status:req.body.status
    })

    newTask.save((err,task)=>{

        if(err) console.log(err)
        else {
            res.redirect('/task/viewtask')
        }
    })
})



router.get('/viewtask', function (req, res, next) {
    
    task.find((err,docs)=>{
        if(err)console.log("Error occured"+err)
            else{
                res.render('viewtasks', {task:docs})
            }
    })
    
    //res.send("View task route")
})

router.post('/delete/:id',function(req,res,next){
    
    task.findByIdAndRemove(req.params.id,(err,todo)=>{

        if(err) console.log("Error occured")
            else{
                res.redirect('/task/viewtask')

            }
    })

})
router.get('/viewcompleted', function (req, res, next) {
    task.find({status:"Completed"},(err,doc)=>{
        
        if(err) console.log("Error"+err)
        else{
            res.render('viewcompleted',{task:doc})
        }
    })
})
router.get('/pending', function (req, res, next) {
    //console.log("pending")
  task.find({status:"Not complete"},function(err,docs){
      if(err) console.log("Error")
        else{
            res.render('pending',{task:docs})
            // console.log("pending")
        }
  })
})
router.post('/pending/:id', function (req, res, next) {
    

    // task.findById(req.params.id,function(err,doc){
    //     if(err) console.log("Error")
    //         else{
    //             doc.status="Completed"
     
    //             doc.save((err)=>{
    //                 if(err) console.log("Error")
    //                     else{
    //                         res.redirect('/task/viewcompleted')
    //                     }
    //             })
    //         }
     
    // })

    task.findByIdAndUpdate(req.params.id,{status:"Completed"},(err,doc)=>{

        if(err) console.log("Error")
            else {
                res.redirect('/task/viewcompleted')
            }
    })
  })


module.exports = router