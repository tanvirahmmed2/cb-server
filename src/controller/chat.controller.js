const OpenAi= require('openai')
const { OPENAI_API } = require('../config/secure')

const openai= new OpenAi({apiKey: OPENAI_API})

const sendPromt=async(req, res)=>{
    try {
        
    } catch (error) {
        return res.status(500).send({
            success: false,
            payload: "server error, try later"
        })
    }
}


module.exports={
    sendPromt
}