/*
Note: this is a very rough template. Changes will be made.
*/

var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var hbs = require('handlebars');

var twitData = require('./blogpostData');
var app = express();
var port = process.env.PORT || 3019;

app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/',function(req,res,next) 
{
  res.status(200).render('blogPage',{posts:blogpageData, show:true});
});

app.get('insertobject:t', function(req, res, next)
{
  var t = req.params.t;
  if(twitData[t])
  {
    res.status(200).render('blogPage', {posts:blogpageData[[t]], show:false});
  }
  else
  {
    next();
  }
});

app.get('*', function (req, res) 
{
    res.status(404).render('404');
});


app.listen(port, function () {

  console.log("== Server is listening on port", port);

});