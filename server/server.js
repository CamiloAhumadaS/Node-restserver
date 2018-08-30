const express = require('express')
const app = express()
require('./config/config')
    //declaramos body parser para serializar el json
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/usuarios', function(req, res) {
    res.json('get Usuario');
});

app.post('/usuarios', function(req, res) {
    let body = req.body;
    if (body.Nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });
    } else {
        res.json({
            persona: body,
        });
    }


});

app.put('/usuarios/:id', function(req, res) {

    let id = req.params.id;

    res.json({
        id,
    });
});

app.delete('/usuarios', function(req, res) {
    res.json('delete Usuario');
})
app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});