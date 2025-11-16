const express = require('express')
const cors = require('cors')
const { translate } = require('./models/api')
const { Translator } = require('./models/Translator')

const app = express()
const port = 3000

app.use(express.json())

app.use(cors({
  origin: 'http://localhost:5173'
}))

app.get('/', (req, res) => {
  res.send('Hello')
})

app.post('/translate', async (req, res) => {
  console.log('New request')

  const textENG = req.body['text']

  console.log('Texto para traduzir: ' + textENG)

  const textPTBR = await translate(textENG)

  console.log('Texto traduzido: ' + textPTBR[0]['translation_text'])

  res.send(textPTBR)
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})