var express = require('express');
const bodyParser = require('body-parser');
const { User } = require('./__test__/entity');

var app = express();
app.use(bodyParser.urlencoded({ // Middleware
    extended: true
}));
app.use(bodyParser.json());

// server = app.listen(222, function () {
//     console.log('Server running ...');
// });

app.get('/ping', (rq, rp) => {
    rp.json({ isSuccess: true, data: { name: 'huy', job: 'developer' } });
})

app.post('/ping', (rq, rp) => {
    const { name } = rq.body;
    if (!name || name === undefined) {
        rp.sendStatus(400);
    } else {
        rp.json({ input: name });
    }
})

module.exports = app; 