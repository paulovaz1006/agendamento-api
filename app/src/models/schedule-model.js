const connection = require('../../database/connection');

class ScheduleModel {
    allSchedule(id, res) {
        const sql = `SELECT  
        schedule.id_schedule,
        schedule.title,
        schedule.description,
        schedule.date,
        schedule.service,
        schedule.id_user,
        users.full_name,
        users.phone,
        users.email,
        users.rg,
        users.cpf,
        users.address,
        users.city 
        FROM schedule INNER JOIN users 
        WHERE users.id_user = ? 
        GROUP BY schedule.id_schedule`;

        connection.query(sql, id, (error, response) => {
            if (error) {
                console.log(error);
            } else {
                res.status(200).json(response);
            }
        })
    }

    registerScheduling(data, res) {
        const sql = 'INSERT INTO schedule SET ?';

        connection.query(sql, data, (error) => {
            if (error) {
                console.log(error);
            } else {
                res.status(200).json({message: 'Cadastrado com sucesso'});
            }
        })
    }

    scheduling(data, id, method, res) {
        let sql;
        let infoSchedule;

        switch(method) {
            case 'get':
                sql = `SELECT  
                    schedule.id_schedule,
                    schedule.title,
                    schedule.description,
                    schedule.date,
                    schedule.service,
                    schedule.id_user,
                    users.full_name,
                    users.phone,
                    users.email,
                    users.rg,
                    users.cpf,
                    users.address,
                    users.city 
                    FROM schedule INNER JOIN users 
                    WHERE schedule.id_schedule = ? 
                    GROUP BY schedule.id_schedule`;
                infoSchedule = id;                
                break;
            case 'delete':
                sql = `DELETE FROM schedule WHERE id_schedule = ?`;
                infoSchedule = id;
                break;
            case 'patch':
                sql = 'UPDATE schedule SET ? WHERE id_schedule = ?';
                infoSchedule = [ data, id ];
                break;
        }

        connection.query(sql, infoSchedule, (error, response) => {
            if (error) {
                console.log(error);
            } else {
                res.status(200).json(response);
            }
        });
    }
}

module.exports = new ScheduleModel;