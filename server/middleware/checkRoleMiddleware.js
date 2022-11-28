const jwt = require('jsonwebtoken')

module.exports = function(role){
    return function(req, res, next){
        if(req.method === "OPTIONS") {
            next()
        }
        const token = req.headers.authorization.split(' ')[1] // Тип_токена токен
        if(!token){
           return res.status(401).json({message: "Не авторизован"})
        }
        try {
            const decoded = jwt.verify(token, `${process.env.SECRET_KEY}`)
            if(decoded.role !== role){
                return res.status(403).json({message: "Нет доступа"})
            }
            req.user = decoded
            next()
            
        }catch(e){
            console.log(e)
            return res.status(401).json({message: "Не авторизован"})
        }
    }
}


