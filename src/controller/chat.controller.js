const OpenAi = require('openai')
const { OPENAI_API } = require('../config/secure')

const openai = new OpenAi({ apiKey: OPENAI_API })

const sendPromt = async (req, res) => {
    try {
        const { language, prompt } = req.body
        if (!language || !prompt) {
            return res.status(400).send({
                success: false,
                payload: 'Please enter inputs'
            })
        }
        const mainPrompt = `
      Create a ${language} social media post about: "${prompt}".
      Include:
      1. A catchy title
      2. A short creative post body (~100 words)
      3. 5 relevant hashtags
    `;

        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [{ role: "user", content: mainPrompt }],
        });

        const result = completion.choices[0].message.content;

        return res.status(200).send({
            success: true,
            payload: result
        })

    } catch (error) {
        return res.status(500).send({
            success: false,
            payload: "server error, try later"
        })
    }
}


module.exports = {
    sendPromt
}