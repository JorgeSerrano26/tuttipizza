const router = require('express').Router();

router.get('/', async (req, res) => {
    res.json("all the pizzas displayed");
});

router.post('/', async (req, res) => {
    res.json("pizza created success");
});

router.get('/:idPizza', async (req, res) => {
    const { params: { idPizza } } = req;
    res.json(idPizza);
});

router.patch('/:idPizza', async (req, res) => {
    const { params: { idPizza } } = req;
    res.json({
        status: `${idPizza} editado`
    });
});

router.delete('/:idPizza', async (req, res) => {
    const { params: { idPizza } } = req;
    res.json({
        status: `${idPizza} eliminado`
    });
});

module.exports = router;