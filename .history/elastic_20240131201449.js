const { Client } = require('@elastic/elasticsearch');

const ELASTIC_apiKey = 'em83UllJMEJMUS1UMlN0TTA1UzU6RmJQUWJPOXdSYjJYQ3kxd3E3OXlzUQ=='
const nodeUrl = "https://bsocial.es.europe-west3.gcp.cloud.es.io"

const client = new Client({
    node: nodeUrl, // Elasticsearch endpoint
    auth: {
      apiKey: { // API key ID and secret
        id: 'foo',
        api_key: 'bar',
      }
    }
  })

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