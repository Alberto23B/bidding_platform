export default function errorHandling(err, req, res, next) {
  res.status(err.status || 500);
  res.send({
    error: {
      message: err.message,
    },
  });
}
