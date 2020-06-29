const bcrypt = require('bcrypt');
const ClientModel = require('../models/client-model');
const CompanyController = require('./company-controller');

class ClientController {
    allClient(req, res) {
        const idCompany = req.params.id_company;
        ClientModel.allClient(idCompany, res);
    }

    async registerClient(req, res) {
        const newPassword =  await ClientController.generatePassword(req.body.password);
        const data = req.body;

        req.body.password = newPassword;
        ClientModel.registerClient(data, res);
    }

    static generatePassword(password) {
        const costHash = 12;
        return bcrypt.hash(password, costHash);
    }   
}

module.exports = new ClientController;