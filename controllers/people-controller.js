const express = require('express')
const router = express.Router()

// import model (People)
const { People } = require('../models')

const db = require('../models') // db.People
// const People= require('../models/People)
console.log(People)


// Router
// http://localhost:4000/people/ - INDEX
router.get('/', async (req, res)=>{
    // res.status(200).json({message:"people index/get route"})
    try{
        const allPeople= await People.find({})
        res.status(200).json(allPeople)
    }catch(err){
        res.status(400).json({error: err})
    }
})

// http://localhost:4000/people/ -CREATE
router.post('/', async (req,res)=>{
    console.log('post route', req.body)
    // res.status(201).json({message: "people create/post route"})
    try{
        console.log("hitting post route")
        const newPerson = await People.create(req.body)
        res.status(201).json(newPerson)
    }catch(err){
        res.status(400).json({error:err})
    }
})

//  http://localhost:4000/people/:id - GET
router.get('/:id', async (req,res)=>{
    // res.status(200).json({message: "people show route: " + req.params.id})
    try{
        const onePerson = await People.findById(req.params.id)
        res.status(201).json(onePerson)
    }catch(err){
        res.status(400).json({error:err})
    }
})

// http://localhost:4000/people//:id - DELETE
router.delete('/:id', async (req,res)=>{
    // res.status(200).json({message: "people deleate route:" + req.params.id})
    try{
        const peopleDeleated= await People.findByIdAndDelete(req.params.id)
        res.status(201).json(peopleDeleated)
    }catch(err){
        res.status(400).json({error:err})
    }
})
// http://localhost:4000/people/:ID - PUT
router.put('/:id',async (req,res)=>{
    // res.status(200).json({message: "people update route:" + req.params.id})
    try{
        const peopleUpdated= await People.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.status(201).json(peopleUpdated)
    }catch(err){
        res.status(400).json({error:err})
    }
})
module.exports = router