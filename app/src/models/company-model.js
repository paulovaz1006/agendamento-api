const connection = require('../../database/connection');

class CompanyModel {
    searchCompany(company, res) {
        return new Promise((resolve, reject) => {
            const sql = `SELECT  * FROM company WHERE name LIKE ?`;

            connection.query(sql, company, (error, response) => {
                if (error) {
                    return reject('Empresa não encontrada');
                } else {
                    return resolve(response);
                }
            })
        })        
    }

    registerCompany(company, res) {
        return new Promise((resolve, reject) => {
            const sql = `INSERT INTO company SET ?`;

            connection.query(sql, company, (error, response) => {
                if (error) {
                    return reject('Erro ao cadastrar');
                } else {
                    return resolve(response);
                }
            });
        });
    }

    searchInfoCompany(id, res) {
        return new Promise ((resolve, reject) => {
            const sql = `SELECT * FROM company WHERE id_company = ?`;
    
            connection.query(sql, id, (error, response) => {
                if (error) {
                    reject('Empresa não encontrado');
                } else {
                    resolve(res.status(200).json(response));
                }
            });
        });    
    }
}

module.exports = new CompanyModel;