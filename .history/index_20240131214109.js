// Importing required modules
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const {pushToElasticsearch} = require('./elastic')
const {runKafkaConsumer, disconnectKafkaConsumer} = require('./kafka')

// await pushToElasticsearch(sampleData)
// const sampleData = {
//     index: 'your_index_name',
//     body: {
//       user: 'John Doe',
//       message: 'Hello, Elasticsearch!'
//     }
//   };


runKafkaConsumer()