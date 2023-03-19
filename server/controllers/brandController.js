const { where } = require("sequelize");
const {Brand} = require("../models");

class brandController {
    static async getAllBrands(req, res){
        try{
            const brands = await Brand.findAll()
            res.status(200).json(brands);
        } 
        catch(err){
            res.status(500).json(err);
        }
    }

    static async getDetailsById(req, res){
        try{
            const id = +req.params.id
            let result = await Brand.findByPk(id);
            result ?

            res.status(200).json(result):
            res.status(404).json({message: "brand not found"})
        }
        catch(err){res.status(500).json(err)
        };
    }
    
    static async add(req, res){
        try{
            const {name,image,city,totalEmployees} = req.body

            let result = await Brand.create({name,image,city,totalEmployees});
            res.status(201).json(result);
        }
        catch(err){
            res.status(500).json(err)
        };
    }
    
    static async remove(req, res){
        try{
            const id = +req.params.id
            let result = await Brand.destroy({where:(id)})

            result ?
            res.status(200).json({message: "brand destroyed"}):
            res.status(404).json({message: "brand tidak ditemukan"})
        }
        catch(err){
            res.status(500).json(err)
        }
    }
    
    static async edit(req, res){
        try{
            const id = +req.params.id
            const{name,image,city,totalEmployees}=req.body

            let result = await Brand.update({name,image,city,totalEmployees},{where: {id}})
        result[0] === 1 ?
        res.status(200).json({message: "brand updated"}):
        res.status(400).json({message: "brand not updated"})    
        }
        catch(err){
            res.status(500).json(err)
        }    
    }

    static async getProductsFromBrand(req,res){
        try{
        }
        catch(err){
            res.status(500).json(err)
        }
    }
}

module.exports = brandController;