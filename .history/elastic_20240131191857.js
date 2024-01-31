const { Client } = require('@elastic/elasticsearch');

// Specify the Elasticsearch node URL
const nodeUrl = 'http://your-elasticsearch-cluster-url:9200';

// Create a new Elasticsearch client
const client = new Client({ node: nodeUrl });

// Sample data to be indexed
const sampleData = {
  index: 'your_index_name', // Specify the index where you want to store the data
  body: {
    user: 'John Doe',
    message: 'Hello, Elasticsearch!'
  }
};

// Function to push data to Elasticsearch
async function pushToElasticsearch(data) {
  try {
    const response = await client.index(data);
    console.log('Data indexed successfully:', response.body);
  } catch (error) {
    console.error('Error indexing data:', error.meta.body.error);
  }
}

// Call the function to push data
pushToElasticsearch(sampleData);
