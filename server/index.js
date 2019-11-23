const express=require('express');
const chalk=require('chalk');
const path=require('path');
var request = require("request");
const cors = require('cors')


var app=express();
app.use(cors())


// process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';



app.get('/',function(req,res){
    request({
        "rejectUnauthorized": false,
        uri: "https://equal.adu-re.ae:746/servicerequest/home.php",
      }, function(error, response, body) {
        // res.render('body',{body});
        res.send({body})
        console.log(body);
        console.log(error);
        
      });
});

app.use(express.static(path.join(__dirname,"/")));
// app.set('views','./src/views');
// app.set('view engine','ejs');


app.listen(3000,function(){
    console.log("listening to port" + chalk.green("3000"));
});