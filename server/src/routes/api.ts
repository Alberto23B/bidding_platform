import express from 'express';
import { checkBiddingInput } from '../middlewares/checkBiddingInput';
import bidController from '../controllers/bidController';

const api = express.Router();

api.use(checkBiddingInput);

api.post('/', bidController);

export default api;
