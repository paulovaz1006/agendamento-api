class TableUser {
    init(connection) {
        this.connection = connection;
        this.user();
    }

    user() {
        const sql = `CREATE TABLE IF NOT EXISTS users (
            id_user INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            full_name varchar(250) NOT NULL,
            phone varchar(11) NOT NULL,
            email varchar(250) NOT NULL UNIQUE,
            password varchar(260) NOT NULL,
            rg varchar(9),
            cpf varchar(11) NOT NULL,
            address varchar(250) NOT NULL,
            city varchar(250) NOT NULL            
        )`;

        this.connection.query(sql, error => {
            if (error) {
                console.log(error);
            }
        });
    }
}

module.exports = new TableUser;