const router = require('express').Router();

router.post('/', async (req, res) => {
    res.json("user created")
});

router.get('/auth', async (req, res) => {
    res.json("get info?");
});



module.exports = router;
