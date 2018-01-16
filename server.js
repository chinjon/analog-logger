const express = require('express');
const bodyParser = require('body-parser');
const data = require('./data/mockFilm.json');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
const port = process.env.PORT || 5000;


app.get('/api/hello', (req, res) => {
    res.send({
        data
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));