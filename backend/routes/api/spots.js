const { Spot, Image } = require('../../db/models');
const express = require('express');
const asyncHandler = require('express-async-handler');
const spotValidations = require('../../validation/spot');

const router = express.Router();

router.get(
    '/',
    asyncHandler(async (req, res) => {
        if (Spot && Image) {
            const domes = await Spot.findAll();
            const images = await Image.findAll();
            return res.json([domes,images]);
        }
    }
));

router.get(
    '/:id',
    asyncHandler(async (req, res) => {
        const id = req.params.id
        if (Spot && Image) {
            const dome = await Spot.findByPK(id);
            return res.json(dome);
        }
    })
)

router.post(
    '/',
    spotValidations.validateCreate,
    asyncHandler(async(req, res, next) => {
        const {userId,address,city,state,country,name,price} = req.body;
        const dome = await Spot.create({
            userId,
            address,
            city,
            state,
            country, 
            name,
            price
        });
        return res.redirect(`${req.baseUrl}/${id}`);

    })
);


router.put(
    ':/id',
    spotValidations.validateUpdate,
    asyncHandler(async function(req,res) {
        const { userId, address, city, state, country, name, price } = req.body;
        const dome = await Spot.create({
            userId,
            address,
            city,
            state,
            country,
            name,
            price
        });
        return res.redirect(`${req.baseUrl}/${id}`);
    })
)


module.exports = router;