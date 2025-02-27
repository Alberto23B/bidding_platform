import express from 'express';
import checkBiddingInput from '../middlewares/checkBiddingInput.js';
import bidController from '../controllers/bidController.js';

const api = express.Router();

api.use(checkBiddingInput);

api.post('/', bidController);

export default api;
