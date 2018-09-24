const express = require('express');

let app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found',
        name: 'Todo App v1.0'
    });
});

app.get('/users', (req, res) => {
    let users = [
        {name: 'Aditya', age: 26},
        {name: 'Bhavesh', age: 26},
        {name: 'Deep', age: 24},
        {name: 'Taral', age: 23}
    ];
    res.status(200).send(users);
});

app.listen(3000);

module.exports.app = app;