const pets = require('express').Router()
const db = require('../models')
const { Pet } = db

//GET ALL PETS
pets.get('/', async (req, res) => {
    try {
        const foundPets = await Pet.Findall()
        res.status(200).json(foundPets)
    } catch (err) {
        res.status(500).json("Server Error")
        console.log(err)
    }
})

module.exports = pets