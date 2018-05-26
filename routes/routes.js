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

routes.get('/api/rolls', (req, res) => {
    Roll.find({}, (err, data) => {
        err ? res.status(400).send() : res.json(data);
    });
});

routes.delete(`/api/delete/roll/:id`, (req, res) => {
    Roll.findByIdAndRemove(req.params.id, (err, doc) => {
        err ? res.status(400).send() : res.json({message: 'sucessful delete'});
    })
})

routes.post('/api/newroll', (req, res) => {
    const dataParsed = JSON.parse(req.body);
    const newRoll = new Roll({
        film: {
            brand: dataParsed.film.brand,
            model: dataParsed.film.model,
            iso: dataParsed.film.iso,
            expCount: dataParsed.film.expCount,
            expDate: dataParsed.film.expDate
        }
    });
    
    newRoll.save()
    .then((data) => {
        console.log('ok', data)
        res.send(data)
    })
    .catch((e) => {
        console.log('error', e)
        res.status(400).send(e)
    })
});

module.exports = routes;