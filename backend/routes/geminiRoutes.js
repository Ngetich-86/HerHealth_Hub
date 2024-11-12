import express from 'express';
const router = express.Router();

import { geminiController } from '../controllers/geminiController.js';

router.get('/data', geminiController);

export default router;
