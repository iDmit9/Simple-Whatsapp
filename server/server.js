//importing
import express from 'express'
import mongoose from 'mongoose'
import Pusher from 'pusher'
import cors from 'cors'

import Messages from './dbMessages.js'

import keys from './config/keys.js'

// console.log('keys.mongo_connection_url = ', keys.mongo_connection_url)

//app config
const app = express()
const port = process.env.PORT || 9000

const pusher = new Pusher({
   appId: "1114607",
   key: "1d4b692500be30505e07",
   secret: keys.pusher_secret,
   cluster: "ap2",
   useTLS: true
});

//middleware
app.use(express.json())
app.use(cors())

//DB config
mongoose.connect(keys.mongo_connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const db = mongoose.connection

db.once('open', () => {
   console.log('DB connected')

   const msgCollection = db.collection("messagecontents")
   const changeStream = msgCollection.watch()

   changeStream.on('change', (change) => {
      console.log(change)

      if (change.operationType === 'insert') {
         const messageDetails = change.fullDocument
         pusher.trigger('messages', 'inserted',
            {
               name: messageDetails.name,
               message: messageDetails.message,
               timestamp: messageDetails.timestamp,
               received: messageDetails.received,
               id: messageDetails._id
            }         
         )
      } else {
         console.log('Error triggering pusher')
      }
   })
})

//api routes
app.get('/', (req, res) => res.status(200).send('hellow world'))

app.get('/messages/sync', (req, res) => {
   Messages.find((err, data) => {
      if (err) {
         res.status(500).send(err)
      } else {
         res.status(200).send(data)
      }
   })
})

app.post('/messages/new', (req, res) => {
   const dbMessage = req.body

   Messages.create(dbMessage, (err, data) => {
      if (err) {
         res.status(500).send(err)
      } else {
         res.status(201).send(`new message created: \n ${data}`)
      }
   })
})

//listen
app.listen(port, () => console.log(`Listening on http://localhost:${port}`))