const express = require('express')
const app = express()

const env = require('dotenv')
const userRouter = require('./routes/userRouter')
const productRouter=require('./routes/productRouter')
const blogRouter=require('./routes/blogRouter')
env.config()
const bodyParser = require('body-parser')
app.use(bodyParser.json())


const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then((data) => {
    console.log('connect to mongo');

}).catch(err => { "myErr" + err })

 
app.use('/user', userRouter)
app.use('/product',productRouter)
app.listen(3000, () => {
    console.log('listening- 3000');
})
