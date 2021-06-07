require('dotenv').config({ path: './configs/.env' });
const express = require('express');
const app = express();
const port = process.env.PORT;
const route = require('./routes/index');

const cors = require('cors');

const db = require('./configs/db');
db.connect();

app.use(cors());
//dot env sai là do ông sai path ./config/.env
app.use(express.json())

console.log(process.env.PORT);

app.listen(port, () => {
    console.log('listening on port' + port);
})

route(app);