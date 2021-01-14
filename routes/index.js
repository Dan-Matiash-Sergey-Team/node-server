var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;


router.get('/get_2020', async function (req,res) {
  const mongoUrl = 'mongodb://universai:cumzone@195.133.147.101:1488'
  const dbName = "dtp"
  const client = await new MongoClient(mongoUrl);
  await client.connect()
  const db = await client.db(dbName);
  const collection = db.collection('dtp')
  
  const dtp2020 = await collection.find({year: 2020}).toArray()
  return res.status(200).send(JSON.stringify(dtp2020))
})

module.exports = router;
