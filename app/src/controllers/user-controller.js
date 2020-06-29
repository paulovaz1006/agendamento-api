const bcrypt = require('bcrypt');
const UserModel = require('../models/user-model');
const CompanyController = require('./company-controller');

class UserController {
    allUser(req, res) {
        const idCompany = req.params.id_company;
        UserModel.allUser(idCompany, res);
    }

    async registerUser(req, res) {
        const company = req.body.company.toLowerCase();
        const searchCompany = await CompanyController.searchCompany(company, res);     

        if (searchCompany) {           
            const newPassword =  await UserController.generatePassword(req.body.password);
            const data = req.body;

            req.body.password = newPassword;

            data['id_company'] = searchCompany.id_company;
            delete data['company'];            
            
            UserModel.registerUser(data, res);
        }
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

    async searchEmail(email) {
       const user = await UserModel.searchEmail(email);       
     
       if (!user) {
           return null;
       }

       return user[0];
    }
}

module.exports = new UserController;