require('dotenv').config({ path: './configs/.env' });
const express = require('express');
const app = express();
const port = process.env.PORT;
const route = require('./routes/index');

const cors = require('cors');

const db = require('./configs/db');
const {errorHandler} = require('./middlewares/errorHandler');

db.connect();

app.use(cors());

// body-parser
app.use(express.json())

app.listen(port, () => {
    console.log('listening on port' + port);
})

route(app);