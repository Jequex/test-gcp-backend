import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({ origin: '*' }));

app.get('/', (req, res) => {
  return res.status(200).send({ message: 'Hello, world!' });
});

app.listen(8080, (req, res) => console.log('listening on port 8080'));