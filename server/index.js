import express from 'express';
import cors from 'cors';
import api from './routes/api.js';

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());

app.use(express.json());
app.use('/', api);

app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      message: err.message,
    },
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
