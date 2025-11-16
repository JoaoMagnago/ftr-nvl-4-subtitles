const express = require('express')
const cors = require('cors')
const { translate } = require('./models/api')

const app = express()
const port = 3000

app.use(express.json())

app.use(cors({
  origin: 'http://localhost:5173'
}))

app.get('/', (req, res) => {
  res.send('Hello')
})

app.post('/translate', (req, res) => {
  console.log('New request')

  const textENG = req.body['text']

  res.send(translate(textENG))
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})