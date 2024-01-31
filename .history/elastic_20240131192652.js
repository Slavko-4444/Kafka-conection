const { Client } = require('@elastic/elasticsearch');

// Specify the Elasticsearch node URL
const nodeUrl = 'http://your-elasticsearch-cluster-url:9200';

// Create a new Elasticsearch client
const client = new Client({ node: nodeUrl });


// Function to push data to Elasticsearch
async function pushToElasticsearch(data) {
  try {
    console.log("Usli smo")
    const response = await client.index(data);
    console.log('Data indexed successfully:', response.body);
  } catch (error) {
    console.error('Error indexing data:', error.meta.body.error);
  }
}

