var movie = require('../models/movie')
var express = require('express')

var router = express.Router();

router.get('/movies/:id',function(req,res,next){
    movie.findById(req.params.id,(err,doc)=>{
        if(err) res.json(err)
        else res.json(doc)
    })
})

router.get('/movies', function (req, res, next) {

    movie.find((err, doc) => {
        if (err) res.json({ msg: "Cannot find Movies" })
        else res.json(doc)
    })
})

router.post('/movies', function (req, res, next) {

    //  console.log(req.body)
    var newMovie = new movie(req.body)
    newMovie.save((err, doc) => {

        if (err) res.json({ msg: err })
        else {
            //res.status(200)
            res.json({ msg: "New Movie added", data: doc })
        }
    })

})

router.put('/movies/:id', function (req, res, next) {

    //console.log(req.params.id)
    movie.findByIdAndUpdate(req.params.id, { runtime: req.body.runtime }, function (err, doc) {

        if (err) res.json(err)
        else {
            //res.status(200)
            res.json({ msg: "updated successfully", data: doc })
        }
    })
})

router.delete('/movies/:id', function (req, res, next) {

    movie.findByIdAndRemove(req.params.id, (err, doc) => {
        if (err) res.json(err)
        else {
            res.json({ msg: "movie deleted successfully", data: doc })
        }
    })
})

router.get('/movies/comments/:id', function (req, res, next) {

    // console.log(req.params.id)
    movie.findById(req.params.id, { 'reviews.comments': 1, 'reviews.rating': 1 }, (err, doc) => {
        if (err) res.json(err)
        else {
            res.json({ data: doc })
        }
    })
})
router.get('/movies/top/:count', function (req, res, next) {


    var num = parseInt(req.params.count)
    movie.aggregate([
        {$unwind:"$reviews"},
        { $group: { _id: "$title", total: { $avg: "$reviews.rating" } } },
        { $sort: { total: -1 }},
        {$limit:num} 
      ],(err,doc)=>{
          if (err) res.json(err)
            else res.json({data:doc})
      })

      


    // var num = req.params.id
    // var q = movie.find().sort({ 'reviews.rating': -1 }).limit(num)
    
    // q.exec((err, doc) => {
    //     if (err) res.json({ msg: err })
    //     else {
    //         res.json({ data: doc })
    //     }
    // })


})

router.put('/movies/comments/:id',function(req,res,next){

   movie.update(req.params.id,{$push:{'reviews':{'reviewer_name':req.body.reviewer_name,'rating':req.body.rating,

        'dateof_review':req.body.dateof_review,'comments':req.body.comments}}},(err,data)=>{
        if(err) res.json(err)
            else res.json({msg:"Added review",data:data})
    })   
})




module.exports = router