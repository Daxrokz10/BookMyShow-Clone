const bodyParser = require('body-parser');
const express = require('express');
const db = require('./configs/db');
const app = express();
const path = require('path');
const router = require('./routers');
const port = process.env.port || 3000;
const session = require('express-session');
const MongoStore = require('connect-mongo');
require('dotenv').config(); // Make sure this is at the top

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'assets')));

app.use(session({
    secret: process.env.SESSION_SECRET || 'yourSecretKey',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.DB_URL }),
    cookie: { maxAge: 1000 * 60 * 60 * 24 } // 1 day
}));

app.use('/',router);

app.listen(port,()=>{
    try {
        db;
        console.log("Server Online on http://localhost:"+port);
    } catch (error) {
        console.log("Server not online");
        console.log(error.message);
    }
})