require('dotenv').config({ path : './configs/.env' });

//dot env sai là do ông sai path ./config/.env
// ong unistall lam gi vay - de tui giai thich trong readme
console.log(process.env.PORT);

const express = require('express');
const app = express();
const port = 4000;
const route = require('./routes/index');


app.listen(port, ()=>{
    console.log('listening on port' + port);
})

route(app);