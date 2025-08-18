const User = require('../models/userSchema');
const bcrypt = require('bcrypt');

// Render homepage with modal (for GET /auth)
exports.login = (req, res) => {
    res.redirect('/'); // Modal is included on homepage
};

// Handle login POST
exports.loginPost = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (user && await bcrypt.compare(password, user.password)) {
        req.session.userId = user._id;
        req.session.username = user.username;
        return res.redirect('/');
    } else {
        return res.redirect('/?loginError=1');
    }
};

// Handle signup POST
exports.signup = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const existing = await User.findOne({ $or: [{ username }, { email }] });
        if (existing) {
            return res.redirect('/?signupError=1');
        }
        const hashed = await bcrypt.hash(password, 10);
        await User.create({ username, email, password: hashed });
        return res.redirect('/?signupSuccess=1');
    } catch (err) {
        return res.redirect('/?signupError=1');
    }
};

// Optional: Logout
exports.logout = (req, res) => {
    req.session.destroy(() => {
        res.redirect('/');
    });
};
