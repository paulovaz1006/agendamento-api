class TableService {

    init(connection) {
        this.connection = connection;
        this.company();
    }

    company() {
        const sql = `CREATE TABLE IF NOT EXISTS service (
                id_service int NOT NULL AUTO_INCREMENT PRIMARY KEY, 
                service varchar(250) NOT NULL,                               
                description VARCHAR(250),
                value DECIMAL(15,2) NOT NULL,
                id_company INT NOT NULL,      
                status VARCHAR(1) NOT NULL DEFAULT '1',          
                FOREIGN KEY(id_company) REFERENCES company(id_company)
            )`;

        this.connection.query(sql, error => {
            if (error) {
                console.log(error)
            }
        });
    }    
}

module.exports = new TableService;