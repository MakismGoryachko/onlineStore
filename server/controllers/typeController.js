const {Type} = require('../models/models')
const ApiError = require('../error/ApiError')

class TypeController{
    
    async create(req, res, next){
        const {name} = req.body
        const candidate = await Type.findOne({where: {name}})
        if(candidate){
            return next(ApiError.badRequest('Такой тип товара уже существует!'))
        }else{
        const type = await Type.create({name})
        return res.json(type)
        }
    }

    async getAll(req, res){
        const allType = await Type.findAll()
        return res.json(allType)
    }
}

module.exports = new TypeController()