const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {save_user_information} = require('./models/server_db');
//Write to console
console.log('Hello Web 2.0 App to Dapp');

//Write to browser
app.get('/',(req,res) => {
  res.send("Hello Web 2.0 App to Dapp browser");
});

/* handling all the parsing */
app.use(bodyParser.json());

app.post('/',async (req,res) => {
  var email = req.body.email;
  var amount = req.body.amount;

  if (amount <= 1){
    return_info = {};
    return_info.error = "true";
    return_info.message = "The Amount should be greater than 1";
    return res.send(return_info);
  }
    var result = await save_user_information({"amount" : amount, "email" : email});
    res.send(result);
  //res.send({'amount' : amount, 'email' : email});
});

var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
});
