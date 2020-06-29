const connection = require('../../database/connection');

class ClientModel {
    allClient(id, res) {
        const sql = `SELECT 
            users.id_user, 
            users.full_name, 
            users.phone, 
            users.email, 
            users.rg, 
            users.cpf,
            users.address,
            users.city,
            users.number,
            company.name as company 
            FROM users INNER JOIN company 
            WHERE users.id_company = ? 
            AND users.type_user = 1 
            AND company.id_company = users.id_company`;

        connection.query(sql, id, (error, response) => {
            if (error) {
                console.log(error);
            } else {
                res.status(200).json(response);
            }
        });
    }

    registerClient(data, res) {
        const sql = 'INSERT INTO users SET ?';

        connection.query(sql, data, (error, response) => {
            if (error) {
                if (error.sqlState == '23000') {
                    res.status(400).json({message: 'Este e-mail ja foi utilizado'});
                } else {
                    res.status(400).json({error, message: 'Erro ao cadastrar'});
                }                
            } else {
                res.status(200).json({
                    user:data,
                    message: 'Cadastro realizado com sucesso!'
                });
            }
        });
    }
}

module.exports = new ClientModel;