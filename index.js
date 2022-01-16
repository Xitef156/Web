const express = require('express');
const app = express()
const port = 8080
var path = require("path");


var file = './index.html'
app.use(express.static(__dirname));
app.get('/', (req, res, next) => {
  if (req.hostname === 'xitef156.tk') {
    return next();
  }

  const user = users.find(user => user.domain === req.hostname);
  if (!user) {
    return res.sendStatus(404);
  }
  
  return res.send(path.resolve(file));
});
})

app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`)})
