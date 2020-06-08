const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const UserModel = require('../models/user-model');

class UserController {
    allUser(res) {
        UserModel.allUser(res);
    }

    async registerUser(req, res) {
        const data = req.body;
        const newPassword =  await UserController.generatePassword(req.body.password);

        req.body.password = newPassword;

        UserModel.registerUser(data, res);
    }

    getUser(req, res) {
        const id = req.params.id;
        UserModel.getUser(id, res);
    }

    static generatePassword(password) {
        const costHash = 12;
        return bcrypt.hash(password, costHash);
    }

    alterUser(req, res) {
        const id = req.params.id;
        const data = req.body;
        UserModel.alterUser(id, data, res);
    }

    deleteUser(req, res) {
        const id = req.params.id;
        UserModel.deleteUser(id, res);
    }

    login(req, res) {
        const token = UserController.generateTokenJwt(req.user);

        if (token) {
            res.set('Autorizathion', token);
            res.status(200).json({token:token})
        }
    }

    static generateTokenJwt(user) {
        const payload = {
            id: user.id_user
        }

        const token = jwt.sign(payload, process.env.JWT_KEY);

        return token;
    }

    async searchEmail(email) {
       const user = await UserModel.searchEmail(email);       
     
       if (!user) {
           return null;
       }

       return user[0];
    }
}

module.exports = new UserController;