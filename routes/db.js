const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workout", (req, res) => {
    Workout.create({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
    console.log(req);
    Workout.findByIdAndUpdate(
        
      params.id,
      { $push: { exercises: body }
    }).then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
});

router.get("/api/workouts/:id", (req, res) => {
    Workout.findById(req.params.id)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

router.get("/api/workouts/", (req, res) => {
    Workout.find(req.params.id)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

// router.get("/api/workouts", (req, res) => {
//     Workout.find({})
//     .sort({ date: -1 })
//     .then(dbWorkout => {
//         res.json(dbWorkout);
//     })
//     .catch(err => {
//         res.json(err);
//     })
// })

router.get("/api/workouts/range", (req, res) => {
    Workout.find(req)
    .sort({ date: -1})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    })
})

module.exports = router;