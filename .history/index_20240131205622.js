// Importing required modules
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const {pushToElasticsearch} = require('./elastic')
const {runKafkaConsumer} = require('./kafka')

// Creating an instance of the express application
const app = express();

// Middleware for logging HTTP requests
app.use(morgan('dev'));

// Middleware for parsing JSON and url-encoded request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define a route for the root endpoint
app.get('/', async (req, res) => {
    await pushToElasticsearch(sampleData)
    await
    res.send('Hello, Express!');
});

const sampleData = {
    index: 'your_index_name',
    body: {
      user: 'John Doe',
      message: 'Hello, Elasticsearch!'
    }
  };

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
