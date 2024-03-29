class TableTypeUser {

    init(connection) {
        this.connection = connection;
        this.typeUser();
        this.insertTypeUser();
    }

    typeUser() {
        const sql = `CREATE TABLE IF NOT EXISTS type_user (
                id_type int NOT NULL AUTO_INCREMENT PRIMARY KEY, 
                type_user varchar(50) NOT NULL UNIQUE                
            )`;

        this.connection.query(sql, error => {
            if (error) {
                console.log(error)
            }
        });
    }    

    insertTypeUser() {
        const sql = `INSERT IGNORE INTO type_user (type_user)
            VALUES 
            ('cliente'), 
            ('empresa') 
            ON DUPLICATE KEY UPDATE type_user=VALUES(type_user)`;        

        this.connection.query(sql, error => {
            if (error) {
                console.log(error)
            }
        });
    }
}

module.exports = new TableTypeUser;