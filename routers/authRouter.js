const express = require('express');
const router = express.Router();
const authController = require('../controllers/authcontroller');

// GET /auth just redirects to home (modal is always present)
router.get('/', authController.login);

// POST /auth (login)
router.post('/', authController.loginPost);

// POST /auth/signup
router.post('/signup', authController.signup);

router.get('/logout', authController.logout);

module.exports = router;
