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