export default function checkBiddingInput(req, res, next) {
  if (!checkParameters(req.body)) {
    return res.json({
      status: 400,
      message: 'Plese insert all parameters',
    });
  }

  next();
}

const checkParameters = ({ base, minStep, maxStep, threshold }) => {
  if (base <= 0 || minStep <= 0 || maxStep <= 0 || threshold <= 0) {
    return false;
  }
  return true;
};
