
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

