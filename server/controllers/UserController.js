const { User } = require("../models");
const {encryptPwd, decryptPwd} = require('../helpers/bcrypt');


class UserController {
    static async getAllUsers(req, res) {
        try {
            let user = await User.findAll();
            res.status(200).json(user);
        }
        catch (err) {
            res.status(500).json(err);
        }

    }

    static async getUserAccount(req, res) {
        try {
            const id = +req.params.id
            let userAccount = await User.findOne({ where: { id }, })

            if (userAccount) {
                res.status(200).json(userAccount);
            }
            else {
                res.status(404).json({ message: "Id not found" })
            };
        }
        catch (err) {
            res.status(500).json(err);
        }
    }

    static async register(req, res) {
        try {
            const { username, email, image, password } = req.body;
            let result = await User.create({
                username,
                email,
                image,
                password : encryptPwd(password),
            });
            res.status(201).json(result);
        }
        catch (err) {
            res.status(500).json(err);
        }
    }
    static async login(req, res) {
        try {
            const { email, password } = req.body
            let userFound = await User.findOne({ where: { email } })
            if (userFound) {
                if (userFound.password === password) {
                    res.status(200).json(userFound);
                }
                else { res.status(403).json({ message: "wrong password" }) }
            }
            else { res.status(404).json({ message: "email not found" }) }
        }
        catch (err) {
            res.status(500).json(err)
        }

    }

    static async remove(req, res) {
        try {
            const id = +req.params.id
            let result = await User.destroy({ where: { id } })

            if (result) {
                res.status(200).json({ message: "user removed" })
            }
            else { res.status(400).json({ message: "user not deleted" }) }
        }
        catch (err) {
            res.status(500).json(err)
        }
    }
    static async edit(req, res) {
        try {
            const id = +req.params.UserId;
            const { username, email, image, password } = req.body

            let result = await User.update({ username, email, image, password 
            }, { 
                where: { id } 
            })

            if (result[0]) {
                res.status(200).json({ message: "user updated" })
            }
            else { res.status(400).json({ message: "user not updated" }) }
        }
        catch (err) {
            res.status(500).json(err)
        }
    }

    static async getProductsByUser(req, res) { }
}

module.exports = UserController;