var express= require ('express');
var app = express();
var path= require ('path');

app.use('/static', express.static(path.join(__dirname, 'node_modules')));
app.use('/static', express.static(path.join(__dirname,'assets')));

app.get("/otraliga", function(req,res){
  res.sendFile(__dirname + "/index.html")
});
app.listen(1234);
