const customExpress = require('../config/custom-express');
const connection = require('../database/connection');
const TableCompany = require('../database/table-company');
const TableTypeUser = require('../database/table-type-user');
const TableService = require('../database/table-service');
const TableUser = require('../database/table-user');
const TableTypeSchedule = require('../database/table-type-schedule');
const TableSchedule = require('../database/table-schedule');
const port = 3300;

connection.connect((error) => {
    if (error) {
        console.log(error);
    } else {
        TableCompany.init(connection);
        TableTypeUser.init(connection);
        TableService.init(connection);
        TableUser.init(connection);
        TableTypeSchedule.init(connection);
        TableSchedule.init(connection);

        const app = customExpress();

        app.listen(port, () => console.log(`Run server ${port}`));
    }
});


