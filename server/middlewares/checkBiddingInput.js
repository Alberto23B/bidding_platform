export default function checkBiddingInput(req, res, next) {
  const { base, minStep, maxStep, steps, threshold } = req.body || '';

  if (!checkBase(base)) {
    return res.json({
      status: 400,
      message: 'Base has to be 0 or more',
    });
  }

  if (!minStep || !maxStep || !steps || !threshold) {
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

const checkBase = (base) => {
  if (base < 0) {
    return false;
  }
  return true;
};
