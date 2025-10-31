require('dotenv').config()

const PORT= process.env.PORT || 4000
const OPENAI_API= process.env.OPENAI_API



module.exports={
    PORT,
    OPENAI_API
}