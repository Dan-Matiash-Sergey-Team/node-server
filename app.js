var express = require('express');
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient;


var app = express();

// view engine setup

app.use(bodyParser.text({
  type: 'text/*'
}))
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

app.get('/', async function (req, res) {
  return res.status(200).send('God`s in his heaven, all right in the earth')
})

app.get('/get_dtp', async function (req, res) {
  const MongoClient = require('mongodb').MongoClient
  const mongoUrl = 'mongodb://universai:cumzone@127.0.0.1:1488'
  const client = await new MongoClient(mongoUrl);
  await client.connect()
  const db = await client.db('dtpsFull');

  y = req.query.id.slice(0, 4)
  m = req.query.id.slice(4, 6)

  let dtpsList = await db.collection(`${y}${m}`).find({"id" : req.query.id}).toArray()
  client.close()
  return res.status(200).send(JSON.stringify(dtpsList))
})

app.get('/get_dtps_all', async function (req, res) {
  const MongoClient = require('mongodb').MongoClient
  const mongoUrl = 'mongodb://universai:cumzone@127.0.0.1:1488'
  const client = await new MongoClient(mongoUrl);
  await client.connect()
  const db = await client.db('dtpsLite');

  let aboba = []
  for (let y = 2015; y < 2022; y++) {
    for (let m = 1; m < 13; m++) {
      month = m < 10 ? `0${m}` : m
      aboba.push(db.collection(`${y}${month}`).find({}).toArray())
    }
  }

  let dtpsList = []
  let aw = await Promise.all(aboba)
  for (let i in aw) {
    dtpsList = dtpsList.concat(aw[i])
  }
  client.close()
  return res.status(200).send(JSON.stringify(dtpsList))
})

app.get('/get_dtps_year', async function (req, res) {
  const MongoClient = require('mongodb').MongoClient
  const mongoUrl = 'mongodb://universai:cumzone@127.0.0.1:1488'
  const client = await new MongoClient(mongoUrl);
  await client.connect()
  const db = await client.db('dtpsLite');

  let aboba = []
  for (let m = 1; m < 13; m++) {
    month = m < 10 ? `0${m}` : m
    aboba.push(db.collection(`${req.query.year}${month}`).find({}).toArray())
  }

  let dtpsList = []
  let aw = await Promise.all(aboba)
  for (let i in aw) {
      dtpsList = dtpsList.concat(aw[i])
  }
  client.close()
  return res.status(200).send(JSON.stringify(dtpsList))
})

app.get('/get_dtps_all_full', async function (req, res) {
  const MongoClient = require('mongodb').MongoClient
  const mongoUrl = 'mongodb://universai:cumzone@127.0.0.1:1488'
  const client = await new MongoClient(mongoUrl);
  await client.connect()
  const db = await client.db('dtpsFull');

  let aboba = []
  for (let y = 2015; y < 2022; y++) {
    for (let m = 1; m < 13; m++) {
      month = m < 10 ? `0${m}` : m
      aboba.push(db.collection(`${y}${month}`).find({}).toArray())
    }
  }

  let dtpsList = []
  let aw = await Promise.all(aboba)
  for (let i in aw) {
    dtpsList = dtpsList.concat(aw[i])
  }
  client.close()
  return res.status(200).send(JSON.stringify(dtpsList))
})

app.get('/get_dtps_month', async function (req, res) {
  const MongoClient = require('mongodb').MongoClient
  const mongoUrl = 'mongodb://universai:cumzone@127.0.0.1:1488'
  const client = await new MongoClient(mongoUrl);
  await client.connect()
  const db = await client.db('dtpsLite');

  let dtpsList = await db.collection(`${req.query.year}${req.query.month}`).find({}).toArray()
  client.close()
  return res.status(200).send(JSON.stringify(dtpsList))
})

app.get('/remove', async function (req, res) {
  const MongoClient = require('mongodb').MongoClient
  const mongoUrl = 'mongodb://universai:cumzone@127.0.0.1:1488'
  const client = await new MongoClient(mongoUrl);
  await client.connect()
  const dbl = await client.db('dtpsLite');
  const dbf = await client.db('dtpsFull');

  y = req.query.id.slice(0, 4)
  m = req.query.id.slice(4, 6)

  dbl.collection(`${y}${m}`).deleteOne({"id" : req.query.id})
  dbf.collection(`${y}${m}`).deleteOne({"id" : req.query.id})
  client.close()
  return res.status(200).send(JSON.stringify({"status" : "done"}))
})

module.exports = app;