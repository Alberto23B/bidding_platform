import { calculateBasePrice } from '../lib/calculateBasePrice.js';

export default function bidController(req, res, next) {
  const result = calculateBasePrice(req.body);
  res.json({ result: result, status: 200, details: 'Success' });
}
