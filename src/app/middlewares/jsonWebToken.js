const jwt = require("jsonwebtoken")


const string = process.env.APP_SECRET 

module.exports = (req, res, next) =>{
    const authToken = req.headers.authorization;

    if(!authToken){
         res.status(401).json({error:" no token provide"})
    }
    const parts = authToken.split(" ");

    if(parts.length !== 2){
        return res.status(401).json({message: "token error"})
    }
    const [scheme, token] = parts 
    
    if(!scheme.includes("bearer")){
        return   res.status(401).json({message:"bad format token"})
    }
    
    jwt.verify(token, process.env.APP_SECRET, (err, decoded) =>{
        if(err){
            return res.status(400).json({message:"invalid token"})
        }
        req.userID = decoded.id
        return next();
    })
}