const express = require('express');
const router = express.Router();

// Import feature routers
const homeRouter = require('./homeRouter');
const authRouter = require('./authRouter');
const movieRouter = require('./movieRouter');
const showRouter = require('./showRouter');
const userRouter = require('./userRouter');

// Mount routers
router.use('/', homeRouter);  // <-- homepage
router.use('/auth', authRouter);  // <-- keep auth separate
router.use('/movies', movieRouter);
router.use('/shows', showRouter);
router.use('/users', userRouter);

module.exports = router;
