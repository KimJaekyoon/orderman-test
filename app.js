const express = require("express");

// middleware
const bodyParser = require("body-parser")
const cookieParser = require('cookie-parser');
const cors = require("cors");

const app = express();

app.use(cors({
    origin: true,
    methods: ["GET", "POST"],
    credentials: true
}));
app.use(bodyParser.json())
app.use(cookieParser())
app.use('/', (req, res) => {
    res.status(200).send('hello world')
});

app.listen(8000);