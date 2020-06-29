class TableTypeSchedule {

    init(connection) {
        this.connection = connection;
        this.typeSchedule();
        this.insertTypeSchedule();
    }

    typeSchedule() {
        const sql = `CREATE TABLE IF NOT EXISTS type_schedule (
                id_type_schedule int NOT NULL AUTO_INCREMENT PRIMARY KEY, 
                type_schedule varchar(50) NOT NULL UNIQUE                
            )`;

        this.connection.query(sql, error => {
            if (error) {
                console.log(error)
            }
        });
    }    

    insertTypeSchedule() {
        const sql = `INSERT IGNORE INTO type_schedule (type_schedule)
            VALUES 
            ('aguardando agendamento'), 
            ('agendado'),
            ('finalizado')  
            ON DUPLICATE KEY UPDATE type_schedule=VALUES(type_schedule)`;        

        this.connection.query(sql, error => {
            if (error) {
                console.log(error)
            }
        });
    }
}

module.exports = new TableTypeSchedule;