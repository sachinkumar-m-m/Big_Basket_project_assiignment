const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const router = require("./router/userRouter")
const cors = require('cors')


const app = express();
const PORT = 5000

app.use(bodyParser.json());

app.use(cors())

app.use('/api', router)

mongoose.connect("mongodb://localhost:27017/admin")




app.listen(PORT, ()=>{
    console.log("server running successfully");
} )

