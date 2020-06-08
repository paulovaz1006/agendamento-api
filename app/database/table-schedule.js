class TableSchedule {
    init(connection) {
        this.connection = connection;
        this.schedule();
    }

    schedule() {
        const sql = ``;

        this.connection.query(sql, error => {
            if (error) {
                console.log(error)
            }
        });
    }
}

module.exports = new TableSchedule;