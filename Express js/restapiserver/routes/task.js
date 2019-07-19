
var task = require('../models/task')
var express = require('express')

var router = express.Router();

router.get('/viewtasks', function (req, res, next) {

    task.find((err, doc) => {

        if (err) res.json({ msg: "Something went wrong" })
        else {
            res.json(doc)
        }
    })
})

router.get('/viewtask/:id', function (req, res, next) {

    task.findById(req.params.id, (err, doc) => {

        if (err) res.json({ msg: "Something went wrong" })
        else {
            res.json(doc)
        }
    })
})

router.get('/viewtaskbyname/:taskname', function (req, res, next) {

    task.find({ taskname: req.params.taskname }, (err, doc) => {

        if (err) res.json({ msg: "Something went wrong" })
        else {
            res.json(doc)
        }
    })
})
router.post('/addtask', function (req, res, next) {

    var newTask = new task({

        taskname: req.body.taskname,
        description: req.body.description,
        status: req.body.status
    })

    newTask.save((err, task) => {

        if (err) res.json({ msg: "Something went wrong" })
        else {
            res.json({ msg: "data added" })
        }
    })
})


router.delete('/delete/:id', function (req, res, next) {

    task.findByIdAndRemove(req.params.id, (err, todo) => {

        if (err) res.json({ msg: "Something went wrong" })
        else {
            res.json({ mag: "done" })

        }
    })

})

router.put('/edit/:id', (req, res, next) => {

    task.findByIdAndUpdate(req.params.id, { status: req.body.status }, (err, doc) => {

        if (err) res.json({ msg: "something went wrong" })
        else
            res.json({ msg: "done" })

    })


})

module.exports = router