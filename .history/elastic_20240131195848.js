const { Client } = require('@elastic/elasticsearch');

const apiKey = 'em83UllJMEJMUS1UMlN0TTA1UzU6RmJQUWJPOXdSYjJYQ3kxd3E3OXlzUQ=='
const clusterId = '7a2c1de310ae495fbff4c6d5041b67cc';

const client = new Client({
  cloud: {
    id: clusterId,
  },
  auth: {
    apiKey,
  },
});



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