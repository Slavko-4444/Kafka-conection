const { Client } = require('@elastic/elasticsearch');

// Specify the Elasticsearch node URL
const nodeUrl = 'https://7a2c1de310ae495fbff4c6d5041b67cc.europe-west3.gcp.cloud.es.io:443';
const api_key = 'em83UllJMEJMUS1UMlN0TTA1UzU6RmJQUWJPOXdSYjJYQ3kxd3E3OXlzUQ=='


// Function to push data to Elasticsearch
async function pushToElasticsearch(data) {
  try {
    console.log("Usli smo")
    const response = await client.index(data);
    console.log('Data indexed successfully:', response.body);
  } catch (error) {
    console.error('Error indexing data:', error);
  }
}

module.exports = {
    pushToElasticsearch
  };