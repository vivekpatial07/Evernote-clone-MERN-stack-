const express = require('express');
var cors = require('cors')
const app = express()
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
app.use(cors())

app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json());

dotenv.config();

const port = process.env.PORT
const uri = process.env.db

mongoose.connect(uri,{ useNewUrlParser:true, useCreateIndex: true, useUnifiedTopology: true})
const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log(`MongoDB connected successfully`)
})

const addRouter = require('./routes/add')
app.use('/', addRouter)



app.listen(port,()=>{
    console.log(`server running on ${port}`)
})