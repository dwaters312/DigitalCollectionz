const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

const uri = 'mongodb://localhost:27017'; 

const client = new MongoClient(uri, { useNewUrlParser: true });

async function start() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB: ', err);
  }
}

start();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
