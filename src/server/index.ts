import * as bodyParser from 'body-parser'
import * as express from 'express'

// Create Express Application
const app = express()

// Mount middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Default route
app.get('/', (req, res) => {
  res.send('Hi there form express!')
})

// Fallback
app.get('*', (_, res) => {
  res.status(404)
  res.send('Could not find that')
})

// Start App listening
const PORT = process.env.PORT || 6969
app.listen(PORT, () => {
  // tslint:disable:no-console
  console.clear()
  console.log('Server running.')
  console.log(`Listening on port ${PORT}`)
})