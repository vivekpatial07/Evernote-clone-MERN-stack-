const express = require('express');
var cors = require('cors')
const app = express()
const dotenv = require('dotenv');
const mongoose = require('mongoose');
//need to update express to remove body parser
const bodyParser = require('body-parser');
app.use(cors())

app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json());

dotenv.config();

const port = process.env.PORT
const uri = process.env.db
mongoose.set('useFindAndModify', false);

mongoose.connect(uri,{ useNewUrlParser:true, useCreateIndex: true, useUnifiedTopology: true})
const connection = mongoose.connection;
connection.once('open', (err)=>{
    console.log(`MongoDB connected successfully`)
})

//todo routes
const addTodoRouter = require('./routes/todoRoutes/add')
const deleteTodoRouter = require('./routes/todoRoutes/delete')
const updateTodoRouter = require('./routes/todoRoutes/edit')
app.use('/',deleteTodoRouter)
app.use('/',updateTodoRouter)
app.use('/', addTodoRouter)

//note routes
const addNoteRouter = require('./routes/noteRoutes/addnote')
app.use('/',addNoteRouter)

//auth routes
const authRouter = require('./routes/authRoutes/userRoutes')
app.use('/',authRouter)

app.listen(port,()=>{
    console.log(`server running on ${port}`)
})