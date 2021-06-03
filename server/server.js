const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 5000;
const APP = express();


APP.use(express.json({ extended: false }))
APP.use(cors());

APP.use('/api/users', require('./routes/user'));
APP.use('/api/orders', require('./routes/order'));
APP.use('/api/pizzas', require('./routes/pizza'));
APP.use('/api/ingredients', require('./routes/ingredient'));

APP.get('/', (req, res) => res.send('API RUNNING'));


APP.listen(PORT, () => {
    console.clear();
    console.log(`Server started on port ${PORT}`)
});