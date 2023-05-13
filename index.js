const express = require('express');
const app = express();
require('dotenv').config();

const cookieParser = require('cookie-parser')
app.use(cookieParser())

app.use(express.urlencoded({
    extended: true
}))

const mustache = require('mustache-express');
app.engine('mustache', mustache());
app.set('view engine', 'mustache');

const path = require('path');
const public = path.join(__dirname, 'public');
app.use(express.static(public));

const router = require('./controllers/wellbeingRoutes.js')
app.use('/', router);


app.listen(3000, () => {
    console.log('Server on 3000. Ctrl-c to quit.');
})
