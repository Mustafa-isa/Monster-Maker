// // const express = require('express');
// // const { Configuration, OpenAIApi } = require("openai");
// // require('dotenv').config();

// // const router = express.Router();
// // const apiKey = process.env.key_API;
// // const configuration = new Configuration({
// //   apiKey: apiKey
// // });
// // const openai = new OpenAIApi(configuration);

// // router.post('/monster_maker', async (req, res) => {
// //   const prompt = "create diet plan for men";

// //   try {
// //     const response = await openai.createCompletion({
// //       model: "text-davinci-002",
// //       prompt: "Convert this text to a programmatic command:\n\nExample: Ask Constance if we need some bread\nOutput: send-msg `find constance` Do we need some bread?\n\nReach out to the ski store and figure out if I can get my skis fixed before I leave on Thursday",
// //       temperature: 0,
// //       max_tokens: 100,
// //       top_p: 1.0,
// //       frequency_penalty: 0.2,
// //       presence_penalty: 0.0,
// //       stop: ["\n"],
    
// //     });


// //     res.json({ text: response.choices[0].text });
// //   } catch (error) {
// //     res.status(500).json({ error: error.toString() });
// //   }
// // });
// const { Configuration, OpenAIApi } = require("openai");
// require('dotenv').config();

// const apiKey = process.env.key_API;
// const configuration = new Configuration({
//   apiKey: apiKey
// });
// const openai = new OpenAIApi(configuration);

// const jj = async () => {
//   try {
//     const response = await openai.createCompletion({
//       model: "text-davinci-002",
//       prompt: "Convert this text to a programmatic command:\n\nExample: Ask Constance if we need some bread\nOutput: send-msg `find constance` Do we need some bread?\n\nReach out to the ski store and figure out if I can get my skis fixed before I leave on Thursday",
//       temperature: 0,
//       max_tokens: 100,
//       top_p: 1.0,
//       frequency_penalty: 0.2,
//       presence_penalty: 0.0,
//       stop: ["\n"],
    
//     });


//     console.log(response.choices[0].text)
//   } catch (error) {
//     console.log(error)
//   }
// }
// jj()