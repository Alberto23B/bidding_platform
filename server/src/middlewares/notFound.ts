export default function notFound(req, res, next) {
  const error = new Error('Not Found');
  next(error);
}
