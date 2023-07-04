const express = require('express')
const app = express()
let requestCount = 0
const cors = require('cors')
app.use(cors())
app.use((req, res, next) => {
  requestCount++
  next()
})

app.get('/api/users/count', (req, res) => {
  const data = {
    count: requestCount
  }
  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify(data))
})

app.listen(4000, () => console.log('Server started on port 4000'))