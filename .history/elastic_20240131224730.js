const { Client } = require("@elastic/elasticsearch");

const ELASTIC_API_KEY =
     "SDQ3MVlJMEJMUS1UMlN0TU5aWGo6X1B4RkdFYzFRXzZKMXNxTlhjNWltUQ==";
const nodeUrl = "https://bsocial.es.europe-west3.gcp.cloud.es.io";

const client = new Client({
     node: nodeUrl, // Elasticsearch endpoint
     auth: {
          apiKey: ELASTIC_API_KEY,
     },
});

// Function to push data to Elasticsearch
async function pushToElasticsearch(data) {
     try {
          console.log("Usli smo");
          const response = await client.index(data);
     } catch (error) {
          console.error("Error indexing data:", error);
     }
}

async function latest_post()) {
     const result = await client.search({
          index: "game-of-thrones",
          query: {
               match: {
                    quote: "winter",
               },
          },
     });

     console.log(result.hits.hits);
}

module.exports = {
     pushToElasticsearch,
     latest_post
};
