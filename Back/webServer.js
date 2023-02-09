const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use('/Front',express.static(path.join(__dirname,'../Front')));
app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../Front/index.html'));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
//http://localhost:3000/
