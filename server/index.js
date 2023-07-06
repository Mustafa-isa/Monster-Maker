const express = require('express')
const app = express()
require('dotenv').config()






const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey:"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",
});


// const router =require('./openaiApi')
let requestCount =0
const cors = require('cors')
// app.use('/api',router)
app.use(express.json());
app.use(cors())

app.use((req, res, next) => {
  requestCount++
  next()
})

app.post('/monster', async(req,res)=>{
  const prompt =req.body.prompt
  console.log(prompt)
  const openai = new OpenAIApi(configuration);
  const completion = await openai.createCompletion({
    "model": "text-davinci-003",
    "prompt":prompt,
    "max_tokens": 1900,
    "temperature": .05,
  
  });
  res.json({monster:completion.data.choices[0].text})
})

app.get('/api/users/count', (req, res) => {
  const data = {
    count: requestCount
  }
  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify(data))
})

app.listen(4000, () => console.log('Server started on port 4000'))