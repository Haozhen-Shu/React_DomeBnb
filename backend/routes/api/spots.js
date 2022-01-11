const models = require('../../db/models');
const Spot = models.Spots;
const express = require('express');
const asyncHandler = require('express-async-handler');

const router = express.Router();
console.log("Spot", Spot)

router.get(
    '/',
    asyncHandler(async (req, res) => {
        console.log("Spot", Spot)
        if (Spot) {
            const domes = await Spot.findAll();
            return res.json(domes);
        }
    }
));

router.post(
    '/',
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

        if (!dome) {
            const err = new Error('Domes Not Found');
            error.status = 401;
            err.title = "Domes Found failed";
            err.errors = ["Domes Not Found"];
            return next(err);

        }

        return res.json({dome,})

    })
)

module.exports = router;