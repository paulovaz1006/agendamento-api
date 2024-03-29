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
            email varchar(250) UNIQUE,
            password varchar(260) NOT NULL,
            rg varchar(9),
            cpf varchar(11) NOT NULL,
            address varchar(250),
            number varchar(250),
            city varchar(250),
            type_user INT NOT NULL,
            id_company INT NOT NULL,
            FOREIGN KEY(type_user) REFERENCES type_user(id_type),
            FOREIGN KEY(id_company) REFERENCES company(id_company)
        )`;

        this.connection.query(sql, error => {
            if (error) {
                console.log(error);
            }
        });
    }
}

module.exports = new TableUser;