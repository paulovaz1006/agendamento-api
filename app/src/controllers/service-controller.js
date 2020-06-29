const ServiceModel = require('../models/service-model');

class ServiceController {
    allService(req, res) {
        const idCompany = req.params.id;
        ServiceModel.allService(idCompany, res);
    }

    registerService(req, res) {
        const data = req.body;
        ServiceModel.registerService(data, res);
    }

    updateService(req, res) {
        const id = req.params.id;
        const data = req.body;
        ServiceModel.updateService(id, data, res);
    }

    deleteService(req, res) {
        const id = req.params.id;
        ServiceModel.deleteService(id, res);
    }
}

module.exports = new ServiceController;