const { Router } = require( 'express');
const {UserModel} = require("../models/user.model");

const router = Router();

router.get('/health', (req, res) => {
    res.status(200).send('ok');
});

router.get('/users', async (req, res) => {
    try {
        res.json({
            data: await UserModel.all(),
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Internal Server Error',
        });
    }
});


module.exports = router;
