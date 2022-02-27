const router = require('express').Router();
const userRoutes = require('./user-routes');
// const pizzaRoutes = require('./pizza-routes');

// router.use('/thoughts', Routes);
router.use('/users', userRoutes);

module.exports = router;