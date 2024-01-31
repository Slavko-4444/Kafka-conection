const { Client } = require('@elastic/elasticsearch');

// Specify the Elasticsearch node URL
const nodeUrl = 'https://7a2c1de310ae495fbff4c6d5041b67cc.europe-west3.gcp.cloud.es.io:443';

// Create a new Elasticsearch client
const client = new Client({ node: nodeUrl });


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