const express = require('express');
const openai = require('openai');

openai.apiKey = process.env.key_API;




const router = express.Router();
router.post('/monster_maker', async (req, res) => {
  const prompt = req.body.prompt;


  try {
    const response = await openai.Completion.create({
      engine: 'text-davinci-002',
      prompt: prompt,
      max_tokens: 1000,
    });

    res.json(response.data.choices[0].text.trim());
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
});
module.exports = router;