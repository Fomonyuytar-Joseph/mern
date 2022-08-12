require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')


// creating the express app
const app = express();


//middleware

app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path , req.method)
    next()
})


//routes
app.use('/api/workouts',workoutRoutes)


// connect to database
mongoose.connect("mongodb+srv://joseph:12345@mernapp.m49xj7x.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    //listen for request
app.listen(process.env.PORT, ()=>{
    console.log('connected to db and listenx on  port' , process.env.PORT)
})

})
.catch((error)=>{
    console.log(error)
})



