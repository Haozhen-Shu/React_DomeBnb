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
            const image = await Image.findAll({
                where:{
                    spotId:id
                }
            })
            return res.json([dome,image[0]]);
        }
    })
)

router.post(
    '/',
    spotValidations.validateCreate,
    asyncHandler(async(req, res, next) => {
        const {url,userId,address,city,state,country,name,price} = req.body;
        const dome = await Spot.create({
            userId,
            address,
            city,
            state,
            country, 
            name,
            price
        });
        const image = await Image.create({
            spotId:dome.id,
            url
        });
        if (dome && image)
        return res.json([dome,image]);

    })
);


router.put(
    '/:id',
    spotValidations.validateUpdate,
    asyncHandler(async function(req,res) {
        const id = req.params.id;
        const dome = await Spot.findByPk(id)
        const { address, city, state, country, name, price } = req.body;
        await dome.update({
            address,
            city,
            state,
            country,
            name,
            price
        });
        return res.json(dome);
    })
)

router.delete(
    '/:id',
    asyncHandler(async function(req, res) {
        const id = req.params.id
        
        const img = await Image.findAll({
            where:{
                spotId:id
            }
        })
        if (img) {
            await img[0].destroy();
        }
        const dome = await Spot.findByPk(id);
        if (dome) {
            dome.destroy();
        }
        return res.json([dome, img]);
        
    })
)


module.exports = router;