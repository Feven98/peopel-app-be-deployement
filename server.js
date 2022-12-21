const express = require('express')
const app= express()
const cors =require('cors')
const morgan= require('morgan')

// controller import
const peopleController = require('./controllers/people-controller')

require('dotenv').config()
require('./config/db.connection')

const {PORT}= process.env

// express / app middleware
app.use(express.json())

// cors helper function
app.use(cors())
// morgan request 
app.use(morgan('dev'))
// router middleware
app.use('/people', peopleController)

// root- home / index / index route for api
app.get('/', (req,res)=>res.redirect('/people'))

app.listen(PORT, ()=> console.log(`Listen on port: ${PORT}`))