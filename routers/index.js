const express = require('express');
const router = express.Router();

// Import feature routers
const authRouter = require('./authRouter');
const movieRouter = require('./movieRouter');
const showRouter = require('./showRouter');
const userRouter = require('./userRouter');

// Mount routers
router.use('/', authRouter);
router.use('/movies', movieRouter);
router.use('/shows', showRouter);
router.use('/users', userRouter);

module.exports = router;
