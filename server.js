const express = require('express');
const app = express();

//Write to console
console.log('Hello Web 2.0 App to Dapp');

//Write to browser
app.get('/',(req,res) => {
  res.send("Hello Web 2.0 App to Dapp browser");
});

app.post('/',(req,res) => {
  var email = req.body.email;
  var amount = req.body.amount;

  res.send({"amount" : amount,"email" : email})
});

var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
});
