const routes = require('express').Router();
const data = require('./../data/mockFilm.json');
const { ObjectId } = require('mongodb')
const { Roll } = require('./../models/roll');


routes.get('/api/test', (req, res) => {
    console.log("You've hit the route")
    res.send("this works")
});


routes.get('/api/hello', (req, res) => {
    res.send({
        data
    });
});

routes.post('/api/test', (req, res) => {
    const roll = new Roll({
        film: {
            brand: 'Kodak',
            model: 'Portra',
            iso: '800',
            expCount: 24,
        }
    });

    roll.save().then(data => {
        console.log('ok')
        res.send(data)
    }, e => {
        console.log('error')
        res.status(400).send(e)
    })
})

module.exports = routes;