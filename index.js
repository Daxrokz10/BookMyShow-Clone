const bodyParser = require('body-parser');
const express = require('express');
const db = require('./configs/db');
const app = express();
const path = require('path')
const port = process.env.port || 3000;

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/',require('./routers'))

app.listen(port,()=>{
    try {
        db;
        console.log("Server Online on http://localhost:"+port);
    } catch (error) {
        console.log("Server not online");
        console.log(error.message);
    }
})