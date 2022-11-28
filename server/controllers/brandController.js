const {Brand} = require('../models/models')
const ApiError = require('../error/ApiError')

class BrandController{
    
    async create(req, res, next){
        const {name} = req.body
        const candidate = await Brand.findOne({where: {name}})
        if(candidate){
            return next(ApiError.badRequest('Такой бренд товара уже существует!'))
        }else{
        const brand = await Brand.create({name})
        return res.json(brand)
        }
    }
    async getAll(req, res){
        const allBrand = await Brand.findAll()
        return res.json(allBrand)
    }
}

module.exports = new BrandController()