require('dotenv').config();

console.log(process.env.PORT);

const express = require('express');
const app = express();
const port = 4000;
const route = require('./routes/index');


app.listen(port, ()=>{
    console.log('listening on port' + port);
})

route(app);