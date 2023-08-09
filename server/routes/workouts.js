const express = require('express');
const {
        postWorkout,
        getWorkouts,
        getWorkout,
        deleteWorkout,
        updateWorkout
} = require('../controllers/workoutController');

const requireAuth = require('../middleware/requireAuth.jsx')

const router = express.Router()

// middleware
router.use(requireAuth)

// get all workouts
router.get('/', getWorkouts)

// get a single workout
router.get('/:id', getWorkout)

// post a new workout
router.post('/', postWorkout)

// delete a workout
router.delete('/:id', deleteWorkout)

// update a workout
router.patch('/:id', updateWorkout)

module.exports = router;