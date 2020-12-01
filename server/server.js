//importing
import express from 'express'
import mongoose from 'mongoose'

import keys from './config/keys.js'

// console.log('keys.mongo_connection_url = ', keys.mongo_connection_url)

//app config
const app = express()
const port = process.env.PORT || 9000

//middleware

//DB config
mongoose.connect(keys.mongo_connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

//api routes
app.get('/', (req, res) => res.status(200).send('hellow world'))

//listen
app.listen(port, () => console.log(`Listening on http://localhost:${port}`))