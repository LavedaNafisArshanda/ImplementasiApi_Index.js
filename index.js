const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

app.get('/', (req, res) => {
    return res.json({
        status: true,
        message: 'Hello World ehehe',
        data: null
    })
})

app.post('/', (req, res) => {
    if (req.body.message === undefined) {
        return res.json({
            status: false,
            message: 'field message is required',
            data: null
        })
    }

    return res.json({
        status: true,
        message: req.body.message,
        data: null
    })
})

app.listen(2000, () => {
    console.log('App mlaku ndek port 2000')
})