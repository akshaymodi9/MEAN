var express = require('express')
var path = require('path')
var products = require('../model/product')

var router = express.Router();


router.get('/viewall', function (req, res, next) {
    products.find((err, doc) => {
        if (err) console.log('Error occured')
        else {
            res.render('viewall', { product: doc })

        }

    })

})
router.get('/viewelectronics', function (req, res, next) {
    products.find({ category: 'Electronics' }, (err, doc) => {
        if (err) console.log('Error occured')
        else {
            res.render('viewall', { product: doc })

        }

    })

})
router.get('/viewfurniture', function (req, res, next) {
    products.find({ category: 'Furniture' }, (err, doc) => {
        if (err) console.log('Error occured')
        else {
            res.render('viewall', { product: doc })

        }

    })

})
router.post('/search', function (req, res, next) {

    //console.log("Hitting")
    console.log(req.body.name)
    products.find({ name: req.body.name }, (err, doc) => {
        if (err) console.log('Error occured')
        else {
            res.render('viewall', { product: doc })

        }

    })

})
router.post('/edit/:id', function (req, res, next) {
    if (req.body.hasOwnProperty("delete")) {

        products.findByIdAndRemove(req.params.id, (err) => {

            if (err) console.log("Error occured")
            else res.redirect('/product/viewall')
        })
    }
    else {

        if (req.body.hasOwnProperty("edit"))
            //console.log("edit"+req.body.hasOwnProperty("edit"))
            products.findById(req.params.id, (err, doc) => {
                if (err) console.log("Error occured")
                else res.render('update', { doc })
            })

    }

    router.post('/update', (req, res, next) => {

        // console.log(req.params.id)
        // console.log(req.params.name)
        // console.log(req.params.cost)
        // console.log(req.params.description)
        // console.log(req.params.category)


       // var name1=req.body.name1
       //  var cost=parseInt(req.body.cost1)
       
        // var description=req.body.description
        //  var category=req.body.category

        //console.log(cost,description)
        // products.findByIdAndUpdate(req.params.id,{$set:{name:req.params.name,cost:req.params.cost,description:req.params.description,category:req.params.category}},(err,doc)=>{

        //             if(err) console.log("Error")
        //                 else {
        //                     res.redirect('/product/viewall')
        //                 }
        //         })

        products.findById(req.body.id, function (err, doc) {
            if (err) console.log("Error")
            else {
                console.log(doc)
                console.log(req.body.id)
                console.log(res.body.category)
                    doc.name =req.body.name1,
                   doc.cost = parseInt(req.body.cost1),
                    doc.description = req.body.description1,
                    doc.category = res.body.category

                doc.save((err) => {
                    if (err) console.log("Error")
                    else {
                        res.redirect('/product/viewall')
                    }
                })
            }

        })

    })
})
module.exports = router;