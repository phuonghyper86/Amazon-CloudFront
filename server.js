const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const upload = require('./middleware/file-upload');
const express = require("express");

app.get("/", function (req, res) {
  res.send("IT WORKED");
});
app.get("/new", function (req, res) {
  res.send("New also worked");
});

app.listen(process.env.PORT || 5000);
app.use(bodyParser.json());
app.use(cors());

app.post('/api/v1/upload', upload.array('image', 1), (req, res) => {
  res.send({ image: req.file });
});

