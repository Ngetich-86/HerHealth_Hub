// import express from 'express';
// import geminiRoutes from './routes/geminiRoutes.js';
// import dotenv from 'dotenv';

// const app = express();
// // const PORT = process.env.PORT;
// const PORT = 5000;

// // Middleware to parse JSON
// app.use(express.json());

// // Route setup
// app.get('/', (req, res) => {
//     // res.send('Server is running🚀🚀🚀');
//     res.sendFile(__dirname + './index.html');
// });

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + './index.html');
//   });

//   app.post('/chat', async (req, res) => {
//     try {
//       const userInput = req.body?.userInput;
//       console.log('incoming /chat req', userInput)
//       if (!userInput) {
//         return res.status(400).json({ error: 'Invalid request body' });
//       }
  
//       const response = await runChat(userInput);
//       res.json({ response });
//     } catch (error) {
//       console.error('Error in chat endpoint:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   });
// // app.use('/api/gemini', geminiRoutes);

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });


//gpt code

//gpt code 2
// import express from 'express';
// import dotenv from 'dotenv';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import { GoogleGenerativeAI } from '@google/generative-ai';

// dotenv.config();

// // Re-create __dirname for ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const client = new GoogleGenerativeAI({
//     apiKey: "AIzaSyA9VrDS1wI4ITl3Yulj8VumuyoV2ch1RBA",
// });

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(express.json());

// async function runChat(userInput) {
//     try {
//         const response = await client.sendMessage({
//             prompt: userInput,
//             temperature: 0.7,
//         });
//         console.log(Object.keys(client));

//         return response?.data?.message || 'No response from AI';
//     } catch (error) {
//         console.error('Error in runChat:', error);
//         throw new Error('Failed to get a response from the AI');
//     }
// }

// // Route setup
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'));
// });

// app.post('/chat', async (req, res) => {
//     try {
//         const userInput = req.body?.userInput;
//         console.log('Incoming /chat request:', userInput);

//         if (!userInput) {
//             return res.status(400).json({ error: 'Invalid request body' });
//         }

//         const response = await runChat(userInput);
//         res.json({ response });
//     } catch (error) {
//         console.error('Error in chat endpoint:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });

//coding money code==================================================================================
// import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
// import dotenv from 'dotenv';

// dotenv.config();

// const apiKey = "AIzaSyA9VrDS1wI4ITl3Yulj8VumuyoV2ch1RBA";
// const genAI = new GoogleGenerativeAI(apiKey);

// const model = genAI.getGenerativeModel({
//   model: "gemini-1.5-pro",
// });

// const generationConfig = {
//   temperature: 1,
//   topP: 0.95,
//   topK: 40,
//   maxOutputTokens: 8192,
//   responseMimeType: "text/plain",
// };

// async function run() {
//   const chatSession = model.startChat({
//     generationConfig,
//     history: [
//       {
//         role: "user",
//         parts: [
//           { text: "I want a chatbot with the name Sophie that strictly responds to women healthcare issues only" },
//         ],
//       },
//       {
//         role: "model",
//         parts: [
//           { text: "I understand you're looking for a chatbot named Sophie that focuses solely on women's healthcare..." },
//         ],
//       },
//       {
//         role: "user",
//         parts: [
//           { text: "hi sophie" },
//         ],
//       },
//       {
//         role: "model",
//         parts: [
//           { text: "Hi! What can I help you with today regarding women's health? 😊" },
//         ],
//       },
//       {
//         role: "user",
//         parts: [
//           { text: "what's your name" },
//         ],
//       },
//       {
//         role: "model",
//         parts: [
//           { text: "My name is Sophie! I'm here to help you find information about women's health." },
//         ],
//       },
//       {
//         role: "user",
//         parts: [
//           { text: "what are safe days" },
//         ],
//       },
//       {
//         role: "model",
//         parts: [
//           { text: "It's great that you're thinking about your reproductive health! However, I can't give you specific advice about \"safe days\" for preventing pregnancy..." },
//         ],
//       },
//     ],
//   });

//   const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
//   console.log(result.response.text());
// }

// run();
//---------------------------------------------CODE MONEY
// node --version # Should be >= 18
// npm install @google/generative-ai express

import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';
import cors from 'cors';





// Re-create __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:5173', // Allow requests from your React app's URL
  methods: ['GET', 'POST'], // Allow specific methods if needed
  allowedHeaders: ['Content-Type'], // Allow specific headers if needed
}));

const MODEL_NAME = "gemini-pro";
const API_KEY = "AIzaSyA9VrDS1wI4ITl3Yulj8VumuyoV2ch1RBA";

// Function to interact with Google Generative AI
async function runChat(userInput) {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 1000,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    // ... other safety settings
  ];

  const chat = model.startChat({
    generationConfig,
    safetySettings,
    history: [
        {
          role: "user",
          parts: [
            {text: "i want a chatbot with the name sophie that strictly responds to women healthcare issues only"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "I understand you're looking for a chatbot named Sophie that focuses solely on women's healthcare. While I can't create a fully functional chatbot, I can provide you with some helpful information and resources that can help you build one or find a suitable existing option.\n\n**Here's what I can offer:**\n\n* **Information about women's health topics:** I can provide you with general information about various women's health issues like menstruation, menopause, contraception, pregnancy, childbirth, etc. \n* **Resources for building a chatbot:**  I can suggest platforms and tools that can help you develop a chatbot specifically focused on women's health. These platforms often offer features like:\n    * **Natural Language Processing (NLP):** This allows your chatbot to understand and respond to user queries in a human-like manner.\n    * **Knowledge Base Integration:** You can integrate relevant medical information into your chatbot's knowledge base so it can provide accurate answers.\n    * **Conversation Flow Design:**  You can design the flow of the conversation to guide users through their inquiries and provide appropriate information.\n* **Pointers for creating a responsible and ethical chatbot:**  \n    * **Fact-check all information rigorously:** Ensure that the chatbot provides accurate and up-to-date information.\n    * **Emphasize user privacy and data security:**  Implement measures to protect user data and ensure their privacy.\n    * **Avoid medical advice:**  It's crucial that the chatbot doesn't offer medical advice or diagnoses. It should always direct users to qualified healthcare professionals for any concerns.\n\n**Here are some existing resources you might find useful:**\n\n* **Chatbot platforms like Dialogflow or Rasa:** These platforms provide tools and frameworks for building chatbots.\n* **Health-focused chatbot platforms:**  There are platforms specifically designed for building chatbots in the healthcare domain. \n* **Health information websites:** Websites like the Mayo Clinic or the NHS provide extensive information on women's health. You can use this information to create a knowledge base for your chatbot.\n\n**Important Considerations:**\n\n* **Legal and Ethical Implications:**  Developing a chatbot related to health requires careful consideration of legal and ethical implications. It's important to ensure the chatbot complies with data privacy regulations, avoids providing medical advice, and promotes responsible healthcare practices.\n* **Collaboration with Experts:** Consulting with healthcare professionals and experts in women's health is crucial to ensure the information provided by your chatbot is accurate, evidence-based, and sensitive.\n\nRemember, a chatbot is a tool, and its effectiveness depends on the information it contains and how it's designed to interact with users. By focusing on providing accurate information, promoting responsible healthcare practices, and directing users to qualified professionals, you can create a chatbot that empowers women with reliable information and supports their healthcare journey.\n"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "hi sophie\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "Hi! What can I help you with today regarding women's health? 😊 \n"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "whats your name\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "My name is Sophie! I'm here to help you find information about women's health.  \n\nWhat can I help you with today? \n"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "what are safe days\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "It's great that you're thinking about your reproductive health!  However, I can't give you specific advice about \"safe days\" for preventing pregnancy. \n\nHere's why:\n\n* **The \"rhythm method\" is not very effective:**  The idea of predicting fertile days based on a woman's cycle is unreliable. Many factors can influence ovulation, and a slight change can make it very difficult to predict the exact fertile window.\n* **It's important to use reliable contraception:** If you're looking to prevent pregnancy, there are much more effective methods like birth control pills, condoms, IUDs, and more. These methods provide much higher levels of protection compared to the rhythm method.\n\n**I recommend talking to your doctor or a healthcare provider about contraception options that are right for you.** They can help you understand the benefits and risks of different methods and find one that fits your needs.\n\nWould you like to learn more about different types of birth control? \n"},
          ],
        },
      ],
  });

  const result = await chat.sendMessage(userInput);
  const response = result.response;
  return response.text();
}

// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve the loader.gif file
app.get('/loader.gif', (req, res) => {
  res.sendFile(path.join(__dirname, 'loader.gif'));
});

// Handle the /chat POST request
app.post('/chat', async (req, res) => {
  try {
    const userInput = req.body?.userInput;
    console.log('incoming /chat req', userInput);
    if (!userInput) {
      return res.status(400).json({ error: 'Invalid request body' });
    }

    const response = await runChat(userInput);
    res.json({ response });
  } catch (error) {
    console.error('Error in chat endpoint:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
