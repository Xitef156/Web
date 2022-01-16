const express = require('express');
const app = express()
const port = 8080
var path = require("path");


var file = './index.html'
app.use(express.static(__dirname));
app.get('/', (req, res) => {
  res.send(__dirname+ file);
});

app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`)})
