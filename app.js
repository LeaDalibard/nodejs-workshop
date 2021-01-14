var express = require('express')
var bodyParser = require('body-parser')
var cookieSession = require('cookie-session')
var app = express()
const port = 3000


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: false}));

app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2']
}))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
