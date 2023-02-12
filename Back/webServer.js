const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
app.use(express.json());
const bmi = require('./service')


app.use('/',express.static(path.join(__dirname,'../Front')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../Front/index.html'));
});


app.post("/counter", (req, res) => {
  let weight = req.body.weight;
  let height = req.body.height;
  let result = bmi.bmiCounter(weight,height);
  res.status(200).send({result});
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
//http://localhost:3000/
