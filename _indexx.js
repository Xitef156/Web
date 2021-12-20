const express = require('express');
const fs = require('fs');
var path = require("path");
const app = express()
const port = 8080
var File = fs.readFileSync('./test.png')
app.use(express.static('img'));
var absolutePath = path.resolve('./test.png');
app.get('/',function(req,res){
  res.sendFile(absolutePath)
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})