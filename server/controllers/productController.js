const {Product} = require("../models");


class productController {
    static async getProducts(req, res){
        try{
            let product = await Product.findAll({include:[user,
            brand]
            })
            res.status(200).json(product);
        } catch(err){res.status(500).json(err)}
    }

    static async getDetailsById(req, res){try{
        const id = Number(req.params.id)
        let product = await Product.findByPk(id)
        product ?
        res.status(200).json(product) :
        res.status(404).json({message:"product not found"})
    } catch(err){res.status(500).json(err)}
}

    static async storeProduct(req, res){
        try{
            const {name,image,price,stock,UserId,BrandId} = req.body;
            let result = await Product.create({name,image,price,stock,UserId,BrandId})

            res.status(201).json(result);
        }
        catch(err){res.status(500).json(err)};
    }
    
    static async destroy(req, res){
        try{
            const id = Number(req.params.id);
            let result = await Product.destroy({where:{id},
            });
            result ? res.status(200).json({message: "product deleted"}):
            res.status(400).json({message:"product non deleted"});
        }
        catch(err) {
            res.status(404).json(err);
        }
    };
    
    static async edit(req, res){
        try{
            const id = Number(req.params.id);
            const {name,image,price,stock,UserId,BrandId} = req.body;

            let result = await Product.update({name,image,price,stock,UserId,BrandId},{where:{id},})

            result[0] === 1 ?
            res.status(200).json({message:"Product updated"}):
            res.status(400).json({message:"Product not updated"});
        }
        catch(err) {
            res.status(500).json(err);
        }
    }
}

module.exports = productController;