const router = require('express').Router();

router.get('/', async (req, res) => {
    res.json("get ingredient")
});

router.post('/', async (req, res) => {
    res.json("ingredient created success");
});

router.get('/:idIngredient', async (req, res) => {
    const { params: { idIngredient } } = req;
    res.json({
        id: `${idIngredient}`
    });
});

router.patch('/:id', async (req, res) => {
    const { params: { idIngredient } } = req;
    res.json({
        status: `${idIngredient} editado`
    });
});

router.delete('/:id', async (req, res) => {
    const { params: { idIngredient } } = req;
    res.json({
        status: `${idIngredient} eliminado`
    });
});

module.exports = router;