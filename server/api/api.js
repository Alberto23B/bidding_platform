import express from 'express';
import checkBiddingInput from '../middlewares/checkBiddingInput.js';
import { calculateBasePrice } from '../lib/calculateBasePrice.js';

const api = express.Router();

api.use('/', checkBiddingInput);

api.post('/', (req, res) => {
  const input = req.body;
  const result = calculateBasePrice(input);

  if (result <= 0) {
    res.json({ result: 0, status: 200, details: "Base can't go below 0" });
  } else {
    res.json({ result: result, status: 200, details: 'Success' });
  }
});

export default api;
