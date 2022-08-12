const Workout = require("../models/workoutModel");
const mongoose = require("mongoose");

//get all workouts

const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });
  res.status(200).json(workouts);
};

//get a single workout
const getWorkout = async (req, res) => {
  //grab the id from the route paramter in the url
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  const workout = await Workout.findById(id);

  if (!workout) {
    return res.status(404).json({ error: "work out not found" });
  }

  res.status(200).json(workout);
};

//create a new workout
const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;

  //add doc to db
  try {
    const workouts = await Workout.create({ title, reps, load });
    res.status(200).json(workouts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  // res.json({mssg: 'POST a new workout'})
};

//delete a workout

const deleteWorkout = async (req, res) => {
  //grab the id from the route paramter
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  //delete doc from db

  const workout = await Workout.findOneAndDelete({ _id: id });

  if (!workout) {
    return res.status(404).json({ error: "work out not found" });
  }

  //return json of the workout  we just deleted
  res.status(200).json(workout);
};

//update a workout

const updateWorkout = async (req, res) => {
  //grab the id from the route paramter
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  //update doc from database
  const workout = Workout.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  
  if (!workout) {
    return res.status(404).json({ error: "work out not found" });
  }

  res.status(200).json(workout)
};

module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout
};
