const connection = require('../../database/connection');
class ScheduleModel {
    allSchedule(id, res) {
        return new Promise ((resolve, reject) => {
            const sql = `SELECT
            schedule.id_schedule,
            schedule.date,
            users.full_name,
            users.id_user
            FROM schedule
            INNER JOIN users
            WHERE schedule.id_type_schedule = 2 OR schedule.id_type_schedule = 3
            AND schedule.id_company = ?
            AND users.id_user = schedule.id_user
            GROUP BY schedule.id_schedule`;

            connection.query(sql, id, (error, response) => {
                if (error) {
                    reject('Agendamentos não encontrado');
                } else {
                    resolve(res.status(200).json(response));
                }
            });
        });
    }

    registerScheduling(data, res) {
        const sql = 'INSERT INTO schedule SET ?';

        connection.query(sql, data, (error) => {
            if (error) {
                res.status(400).json({message: 'Erro no agendamento', error: error});
            } else {
                res.status(200).json({message: 'Agendado com sucesso'});
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
                    schedule.id_user,
                    schedule.id_service,
                    schedule.id_company,
                    users.full_name,
                    users.phone,
                    users.email,
                    users.rg,
                    users.cpf,
                    users.address,
                    users.city,
                    company.name,
                    service.service
                    FROM schedule
                    INNER JOIN users
                    INNER JOIN company
                    INNER JOIN service
                    WHERE schedule.id_schedule = ?
                    AND schedule.id_user = users.id_user
                    AND schedule.id_service = service.id_service
                    AND schedule.id_company = company.id_company
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

    scheduleToday(id, date, res) {
        const sql = `SELECT
            schedule.id_type_schedule,
            schedule.id_schedule,
            schedule.title,
            schedule.description,
            schedule.date,
            users.full_name,
            service.service
            FROM schedule
            INNER JOIN users
            INNER JOIN company
            INNER JOIN service
            WHERE users.id_company = ?
            AND (schedule.id_type_schedule = 2 OR schedule.id_type_schedule = 3)
            AND users.id_user = schedule.id_user
            AND service.id_service = schedule.id_service
            AND DATE_FORMAT(date, '%Y-%m-%d') = ?
            GROUP BY schedule.id_schedule
            ORDER BY date`;

        connection.query(sql, [ id, date ], (error, response) => {
            if (error) {
                console.log(error);
            } else {
                if (response.length > 0) {
                    res.status(200).json(response);
                } else {
                    res.status(200).json({message:'Sem agendamentos hoje'});
                }
            }
        });
    }

    scheduleDateSelected(id, date, res) {
        const sql = `SELECT
            schedule.id_type_schedule,
            schedule.id_schedule,
            schedule.title,
            schedule.description,
            schedule.date,
            users.full_name,
            service.service
            FROM schedule
            INNER JOIN users
            INNER JOIN company
            INNER JOIN service
            WHERE users.id_company = ?
            AND (schedule.id_type_schedule = 2 OR schedule.id_type_schedule = 3)
            AND users.id_user = schedule.id_user
            AND service.id_service = schedule.id_service
            AND DATE_FORMAT(date, '%Y-%m-%d') = ?
            GROUP BY schedule.id_schedule
            ORDER BY date`;

        connection.query(sql, [ id, date ], (error, response) => {
            if (error) {
                console.log(error);
            } else {
                if (response.length > 0) {
                    res.status(200).json(response);
                } else {
                    res.status(200).json({message:'Sem agendamentos hoje'});
                }
            }
        });
    }
}

module.exports = new ScheduleModel;

