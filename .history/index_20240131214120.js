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