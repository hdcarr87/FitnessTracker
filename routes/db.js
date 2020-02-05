const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workout", (req, res) => {
    Workout.create({})
    .then(dbWorkout => {
        return Workout.findOneAndUpdate({_id: dbWorkout.id}, {$push: {exercises: req.body}});
    }).then(result => {
        res.json(result);
    }).catch(err => {
        res.status(400).json(err);
    })
})

router.get("/api/workouts", (req, res) => {
    Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
})

router.get("/api/workouts/range", (req,res) => {
    Workout.findOneAndDelete({})
    .then(dbWorkout => {
        res.json(dbWorkout)
    })
})

module.exports = router;