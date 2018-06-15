/*
Note: this is a very rough template. Changes will be made.


var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser')
var MongoClient = require('mongodb').MongoClient;
var hbs = require('handlebars');

var blogpostData = require('./blogpostData');
/*
var mongoHost = process.env.MONGO_HOST;
var mongoPort = process.env.MONGO_PORT || '27017';
var mongoUsername = process.env.MONGO_USERNAME;
var mongoPassword = process.env.MONGO_PASSWORD;
var mongoDBName = process.env.MONGO_DB_NAME;

var mongoURL = "mongodb://" + mongoUsername + ":" + mongoPassword + "@" + mongoHost + ":" + mongoPort + "/" + mongoDBName;
var mongoDB = null;


var app = express();
var port = process.env.PORT || 3019;

app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

/*Not sure if this is needed*/ 
//app.use(bodyParser.json())
/*
app.use(express.static('public'));

app.get('/',function(req,res,next) 
{
  res.status(200).render('blogPage',{posts:blogpostData, show:true});
});

app.get('/insertobject', function(req, res, next)
{
  var t = req.params.t;
  if(blogpostData[t])
  {
    res.status(200).render('blogPage', {posts:blogpostData[[t]], show:false});
  }
  else
  {
    next();
  }
});
*/
/* Need more info to fill in
app.get('/insertobject/:t', function (req, res, next)
{

}
)
*/
/*
app.get('*', function (req, res) 
{
    res.status(404).render('404');
});

MongoClient.connect(mongoURL, function(err, client)
{
  if (err){
    throw err;
  }
  mongoDB = client.db(mongoDBName);
  app.listen(port, function(){
    console.log("==Server MongoDB listening on port");
  });
});
/*
app.listen(port, function () {

  console.log("== Server is listening on port", port);

});
*/
/*-------*/
var bodyParser = require('body-parser');
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var hbs = require('handlebars');

var blogpostData = require('./blogpostData');
var app = express();
var port = process.env.PORT || 4137;

var mongoHost = "classmongo.engr.oregonstate.edu";
var mongoPort = process.env.MONGO_PORT || '27017';
var mongoUsername = "cs290_mariast";
var mongoPassword = "cs290_mariast";
var mongoDBName = "cs290_mariast";

var MongoClient = require('mongodb').MongoClient;

var Mongo = require('mongodb');
/*var client = Mongo.connect("mongodb://mariast");*/

var mongoURL = "mongodb://" + mongoUsername + ":" + mongoPassword + "@" + mongoHost + ":" + mongoPort + "/" + mongoDBName;
var mongoDB = null;


app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/',function(req,res,next) {
  res.status(200).render('blogPage',{posts :blogpostData, show:true});
});

/*
app.get('/posts/:t', function(req, res, next)
{
  var t = req.params.t;
  if(blogpostData[t])
  {
    res.status(200).render('blogPage',
    {posts:[blogpostData[t]], show:false
    });
  }
  else{
    next();
  }
});
*/
app.get('*', function (req, res) {
    res.status(404).render('404');
});

MongoClient.connect(mongoURL, function(err, client)
{
  if (err){
    throw err;
  }
  mongoDB = client.db(mongoDBName);
  app.listen(port, function(){
    console.log("==Server MongoDB listening on port");
  });
});

/*
app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
*/
