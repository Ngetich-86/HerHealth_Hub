import express from 'express';
import geminiRoutes from './routes/geminiRoutes.js';
import dotenv from 'dotenv';

const app = express();
// const PORT = process.env.PORT;
const PORT = 5000;

// Middleware to parse JSON
app.use(express.json());

// Route setup
app.get('/', (req, res) => {
    res.send('Server is running🚀🚀🚀');
});

app.use('/api/gemini', geminiRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
