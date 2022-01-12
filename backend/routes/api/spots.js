const { Spot, Image } = require('../../db/models');
const express = require('express');
const asyncHandler = require('express-async-handler');
const spotValidations = require('../../validation/spot');
const { db } = require('../../config');

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
            const dome = await Spot.findByPk(id);
            const image = await Image.findByPk(IDBCursor)
            return res.json([dome,image]);
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
    '/:id',
    spotValidations.validateUpdate,
    asyncHandler(async function(req,res) {
        const id = req.params.id;
        const dome = await Spot.findByPK(id)
        const { userId, address, city, state, country, name, price } = req.body;
        await dome.update({
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

router.delete(
    '/:id',
    asyncHandler(async function(req, res) {
        const id = req.params.id
        if (Spot && Image) {
            const dome = await Spot.findByPK(id);
            dome.destroy();
            return res.json({message:'Successfully Deleted'});
        }
    })
)


module.exports = router;