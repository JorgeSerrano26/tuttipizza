const router = require('express').Router();

router.get('/', async (req, res) => {
    res.json("get pizzas")
});

router.post('/', async (req, res) => {
    res.json("pizza created success");
});

router.get('/:idPizza', async (req, res) => {
    const { params: { idPizza } } = req;
    res.json(idPizza);
});

router.patch('/:id', async (req, res) => {
    const { params: { idPizza } } = req;
    res.json({
        status: `${idPizza} editado`
    });
});

router.delete('/:id', async (req, res) => {
    const { params: { idPizza } } = req;
    res.json({
        status: `${idPizza} eliminado`
    });
});

module.exports = router;