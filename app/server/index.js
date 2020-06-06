const customExpress = require('../config/custom-express')

app.listen(3300, (req, res) => {
    res.send('Api de agendamento');
});