require('dotenv').config();
const express = require('express');

const { createServer } = require('http');
const cors = require("cors");

const PORT = process.env.PORT || 9200;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res, next) => {
  console.log('console from server');
  res.write('Text from server');
  res.end();
  // res.send('"Server SP works..."');
  // next();
});

const start = () => {
  try {

    /** Create Server */
    const server = createServer(app);

    server.listen(PORT, () => console.log(`Server started on port`, PORT));

  } catch (e) {
    console.log('Start() ERROR', e);
  }
}

start();
