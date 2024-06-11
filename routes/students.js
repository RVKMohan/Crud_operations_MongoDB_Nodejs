const express = require('express')
const router = express.Router()
const Student = require('../models/student')


router.get('/', async (req, res) => {
    try {
        const Students = await Student.find()
        res.json(Students)
    } catch (err) {
        res.send('Error ' + err)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const Students = await Student.findById(req.params.id)
        res.json(Students)
    } catch (err) {
        res.send('Error ' + err)
    }
})


router.post('/', async (req, res) => {
    const Students = new Student({
        name: req.body.name,
        rollnumber: req.body.rollnumber,
        attendence: req.body.attendence
    })

    try {
        const a1 = await Students.save()
        res.json(a1)
    } catch (err) {
        res.send('Error')
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const Students = await Student.findById(req.params.id)
        Students.sub = req.body.sub
        const a1 = await Students.save()
        res.json(a1)
    } catch (err) {
        res.send('Error')
    }

})

module.exports = router