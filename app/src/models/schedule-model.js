const connection = require('../../database/connection');

class ScheduleModel {
    allSchedule(res) {
        const sql = 'SELECT * FROM schedule';

        connection.query(sql, (error, response) => {
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
                sql = `SELECT * FROM schedule WHERE id_schedule = ?`;
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

        connection.query(sql, infoSchedule, (error) => {
            if (error) {
                console.log(error);
            } else {
                res.status(200).json({message: 'Cadastrado com sucesso'});
            }
        })
    }
}

module.exports = new ScheduleModel;