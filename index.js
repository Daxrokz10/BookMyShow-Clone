const bodyParser = require('body-parser');
const express = require('express');
const db = require('./configs/db');
const app = express();
const path = require('path');
const router = require('./routers');
const port = process.env.port || 3000;

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'assets')));


app.use('/',router);

const authRouter = require("./routers/authRouter");
app.use("/auth", authRouter);

const movieRouter = require("./routers/movieRouter");
app.use("/movies", movieRouter);


app.listen(port,()=>{
    try {
        db;
        console.log("Server Online on http://localhost:"+port);
    } catch (error) {
        console.log("Server not online");
        console.log(error.message);
    }
})