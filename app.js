import express from "express";

const app = express();

app.get('/', (req, res) => {
  return res.status(200).send({ message: 'Hello, world!' });
});

app.listen(8000, (req, res) => console.log('listening on port 8000'));