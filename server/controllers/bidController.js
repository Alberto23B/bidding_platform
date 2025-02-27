import { calculateBasePrice } from '../lib/calculateBasePrice.js';

export default function bidController(req, res, next) {
  const result = calculateBasePrice(req.body);

  if (result <= 0) {
    res.json({ result: 0, status: 200, details: "Base can't go below 0" });
  } else {
    res.json({ result: result, status: 200, details: 'Success' });
  }
}
