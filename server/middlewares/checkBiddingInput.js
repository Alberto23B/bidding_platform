export default function checkBiddingInput(req, res, next) {
  const { base, minStep, maxStep, steps, threshold } = req.body || '';

  if (!base || !minStep || !maxStep || !steps || !threshold) {
    return res.json({
      status: 400,
      message: 'Please insert all requested fields',
    });
  }

  if (minStep <= 0 || maxStep <= 0 || threshold <= 0) {
    return res.json({
      status: 400,
      message: "MinStep, MaxStep and Threshold values can't go below 0",
    });
  } else {
    next();
  }
}
