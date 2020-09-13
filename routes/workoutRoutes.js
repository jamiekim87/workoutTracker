const router = require('express').Router()
const { Workout } = require('../models')

// GET all workout
router.get('/workouts', (req, res) => {
  Workout.find()
    .then(workouts => res.json(workouts))
    .catch(err => console.log(err))
})

// POST one workout
router.post('/workouts', (req, res) => {
  Workout.create(req.body)
    .then((workout) => res.json(workout))
    .catch(err => console.log(err))
})


// PUT one workout
router.put('/workouts/:id', (req, res) => {
  Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } })
    .then(workout => res.json(workout))
    .catch(err => console.log(err))
})

// Exporting routes
module.exports = router