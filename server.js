const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {save_user_information} = require('./models/server_db');
const path = require('path');
const publicPath = path.join(__dirname,'./public');

/* handling all the parsing */
app.use(bodyParser.json());
app.use(express.static(publicPath));

//Write to console
console.log('Hello Web 2.0 App to Dapp');

//Write to browser
app.get('/',(req,res) => {
  res.send("Hello Web 2.0 App to Dapp browser");
});


app.post('/post_info',async (req,res) => {
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

app.get('/get_total_amount', async (req,res)=>{
  var result = await get_total_amount();
  console.log(result);
  res.send(result);
});

var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
});
