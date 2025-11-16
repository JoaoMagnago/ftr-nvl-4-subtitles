const express = require('express')
const cors = require('cors')

const app = express()
const port = 3000

app.use(cors({
  origin: 'http://localhost:5173'
}))

app.get('/', (req, res) => {
  res.send('Hello')
})

app.post('/translate', (req, res) => {
  console.log('New request')
  res.send([{ 'translated_text': 'Legenda traduzida pelo servidor' }])
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})