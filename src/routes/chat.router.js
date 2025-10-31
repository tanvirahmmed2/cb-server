const express= require('express')
const { sendPromt } = require('../controller/chat.controller')

const chatRouter= express.Router()


chatRouter.post('/send', sendPromt)

module.exports= chatRouter