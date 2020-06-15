class TableSchedule {
    init(connection) {
        this.connection = connection;
        this.schedule();
    }

    schedule() {
        const sql = `CREATE TABLE IF NOT EXISTS schedule (
            id_schedule INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            title varchar(250) NOT NULL,
            description varchar(300),
            date DATETIME NOT NULL,          
            id_user INT NOT NULL,
            id_company INT NOT NULL,
            id_service INT NOT NULL,
            FOREIGN KEY(id_user) REFERENCES users(id_user),
            FOREIGN KEY(id_service) REFERENCES service(id_service),
            FOREIGN KEY(id_company) REFERENCES company(id_company)
        )`;

        this.connection.query(sql, error => {
            if (error) {
                console.log(error)
            }
        });
    }
}

module.exports = new TableSchedule;