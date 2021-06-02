const router = require('express').Router();

router.get('/', async (req, res) => {
    res.json("get orders")
});

router.post('/', async (req, res) => {
    res.json("created success");
});

router.get('/:idOrder', async (req, res) => {
    const { params: { idOrder } } = req;
    res.json(idOrder);
});

router.patch('/:idOrder/status', async (req, res) => {
    res.json("status changed");
});

module.exports = router;