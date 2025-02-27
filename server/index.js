import express from 'express';
import cors from 'cors';
import api from './routes/api.js';
import errorHandling from './middlewares/errorHandling.js';
import notFound from './middlewares/notFound.js';

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());

app.use(express.json());
app.use('/', api);

app.use(notFound);

app.use(errorHandling);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
