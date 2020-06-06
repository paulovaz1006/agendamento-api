const express = require('express');
const bodyParser = require('body-parser');
const consign = require('consign');

module.exports = () => {
    const app = express();

    app.use(
        bodyParser.urlenconded({
            extends: true
        })
    )

    app.use(
        bodyParser.json()
    )

    consign()
        .include('../src/routes')
        .into(app)

    return app;
}