const express= require('express')
const cors= require('cors')
const cookieparser= require('cookie-parser')
const chatRouter = require('./routes/chat.router')
const cookieParser = require('cookie-parser')




const app= express()


app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))

app.get('/', (req,res)=>{
    res.status(200).send({
        success: true,
        message: 'Server is running'
    })

})

app.use('/chat', chatRouter)

module.exports= app