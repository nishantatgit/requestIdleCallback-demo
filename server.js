const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./public'));

const options = {
  root: __dirname
}
app.get('/index',(req,res) => {
  res.sendFile('/public/index.html', options);
});

app.listen(7009,(req,res) => {
  console.log('app listening on port 7009');
});