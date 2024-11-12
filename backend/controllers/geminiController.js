
// import axios from "axios";

// // Load environment variables
// const { GEMINI_API_KEY, GEMINI_API_URL } = process.env;

// // Controller function to interact with the Gemini API
// const getGeminiData = async (req, res) => {
//     try {
//         // Make a GET request to Gemini API
//         const response = await axios.get(`${GEMINI_API_URL}/your-endpoint`, {
//             headers: {
//                 'Authorization': `Bearer ${GEMINI_API_KEY}`,
//                 'Content-Type': 'application/json'
//             }
//         });

//         // Send data received from Gemini to the client
//         res.status(200).json(response.data);
//     } catch (error) {
//         console.error('Error fetching data from Gemini:', error);
//         res.status(500).json({ error: 'Failed to retrieve data from Gemini API' });
//     }
// };

// module.exports = {
//     getGeminiData
// };

import axios from "axios";

export const geminiController = () => {
    // Load environment variables
    // const { GEMINI_API_KEY, GEMINI_API_URL } = process.env;
    const GEMINI_API_KEY = 'AIzaSyDEnPuIO-w9HAKGPlqoOipS06iYS4cyTYg';
    const GEMINI_API_URL = 'https://api.gemini.com/v1';

    // Controller function to interact with the Gemini API
    const getGeminiData = async (req, res) => {
        try {
            // Make a GET request to Gemini API
            const response = await axios.get(`${GEMINI_API_URL}/your-endpoint`, {
                headers: {
                    'Authorization': `Bearer ${GEMINI_API_KEY}`,
                    'Content-Type': 'application/json'
                }
            });

            // Send data received from Gemini to the client
            res.status(200).json(response.data);
        } catch (error) {
            console.error('Error fetching data from Gemini:', error);
            res.status(500).json({ error: 'Failed to retrieve data from Gemini API' });
        }
    };

    return {
        getGeminiData
    };
}
