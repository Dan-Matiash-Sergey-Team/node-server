
var express = require('express');
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient;


var app = express();

// view engine setup

app.use(bodyParser.text({type: 'text/*'}))
app.use(bodyParser.json())
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
//app.use(logger())
app.use(function (req, res, next) {
  res.setHeader('Connection', 'close');
  next();
});

app.get('/get_2020', async function (req,res) {
  const mongoUrl = 'mongodb://universai:cumzone@195.133.147.101:1488'
  const dbName = "dtp"
  const client = await new MongoClient(mongoUrl);
  await client.connect()
  const db = await client.db(dbName);
  const collection = db.collection('dtp')
  
  const dtp2020 = await collection.find({year: 2020}).toArray()
  return res.status(200).send(JSON.stringify(dtp2020))
})

module.exports = app;