const router = require('express').Router()
const { Workout } = require('../models')
const passport = require('passport')

// // GET all workouts 
// router.get('/workouts', (req, res) => {
//     Workout.find()
//         .populate('user')
//         .then(workouts => res.json(workouts))
//         .catch(err => console.log(err))
// })

// POST one workout
router.post('/workouts', passport.authenticate('jwt'), (req, res) => {
    Workout.create({
        text: req.body.text, 
        isDone: req.body.isDone, 
        user: req.user._id
    })
        .then(item => {
            User.findByIdAndUpdate(item.user, { $push: { workouts: workout._id } })
                .then(() => res.json(workout))
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
})

// PUT one workout 
router.put('/workouts/:id', passport.authenticate('jwt'), (req, res) => {
    Workout.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

// DELETE one workout 
router.delete('/items/:id', passport.authenticate('jwt'), (req, res) => {
    Workout.findByIdAndDelete(req.params.id)
        .then(() => res.sendStatus(200))
        .catch(err => console.log(err))
})

module.exports = router