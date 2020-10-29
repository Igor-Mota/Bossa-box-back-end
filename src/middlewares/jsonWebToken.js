const jwt = require("jsonwebtoken")
const string = require("../secret/stringForGenerateHash.json")

module.exports = (req, res, next) =>{
    const authToken = req.headers.authorization;

    if(!authToken){
        return res.status(401).json({error:" no token prvide"})
    }
    const parts = authToken.split(" ");

    if(parts.length !== 2){
        return res.status(401).json({message: "token error"})
    }
    const [ scheme, token] = parts 
    
    if(!scheme.includes("Bearer")){
        return   res.status(401).json({message:"bad format token"})
    }

    jwt.verify(token, string.string, (err, decoded) =>{
        if(err){
            return res.status(400).json({message:"invalid token"})
        }
        req.userID = decoded.id
        return next();
    })
}