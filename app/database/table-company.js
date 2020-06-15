class TableCompany {

    init(connection) {
        this.connection = connection;
        this.company();
    }

    company() {
        const sql = `CREATE TABLE IF NOT EXISTS company (
                id_company int NOT NULL AUTO_INCREMENT PRIMARY KEY, 
                name varchar(250) NOT NULL,                
                addres varchar(250), 
                city varchar(250), 
                number varchar(250),
                cnpj varchar(14) UNIQUE    
            )`;

        this.connection.query(sql, error => {
            if (error) {
                console.log(error)
            }
        });
    }    
}

module.exports = new TableCompany;