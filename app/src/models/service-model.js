const connection = require('../../database/connection');
const { response } = require('express');

class ServiceModel {
    registerService(data, res) {
        const sql = 'INSERT INTO service SET ?';

        connection.query(sql, data, (error, response) => {
            if (error) {
                res.status(400).send(error)
            } else {
                res.status(200).json({message: 'Serviço cadastrado com sucesso'})
            }
        });
    }

    allService(idCompany, res) {
        const sql = 'SELECT id_service, service, description, value FROM service WHERE id_company = ? AND status = 1';

        connection.query(sql, idCompany, (error, response) => {            
            if (error) {
                res.status(400).send(error)
            } else {
                res.status(200).json(response)
            }
        });
    }

    updateService(id, data, res) {
        const sql = 'UPDATE service SET ? WHERE id_service = ?';
        const  info = [ data, id ]; 

        connection.query(sql, info, (error) => {
            if (error){
                res.status(400).send(error);
            } else {
                res.status(200).json({message: 'Serviço alterado com sucesso'});
            }
        });
    }    

    deleteService(id, res) {
        const sql = 'UPDATE service SET status = 2 WHERE id_service = ?';

        connection.query(sql, id, (error) => {
            if (error) {
                res.status(400).send(error);
            } else {
                res.status(200).json({message: 'Serviço deletado com sucesso'})
            }
        });
    }
}

module.exports = new ServiceModel;