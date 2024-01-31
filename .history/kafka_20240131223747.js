const { Kafka, Partitioners, logLevel } = require("kafkajs");
const { pushToElasticsearch } = require("./elastic");

// Kreiramo Kafka producenta sa odgovarajućom konfiguracijom
const kafka = new Kafka({
     clientId: "user-service",
     logLevel: logLevel.NOTHING,
     brokers: ["pkc-4r087.us-west2.gcp.confluent.cloud:9092"],
     ssl: true,
     sasl: {
          mechanism: "plain",
          username: "J5Z224QZSXCMZDW4",
          password:
               "w9drey8M7aJ+OSIP/5KTceRGPFPO5yQcJ6lvhiOmeyxqdVHx3rsSTiU1Fmx9fpjZ",
     },
     createPartitioner: Partitioners.LegacyPartitioner,
});

const consumer = kafka.consumer({ groupId: "spec-group" });
const sampleData = {
        index: 'milos_name',
        body: {
        }
      };


async function runKafkaConsumer() {
     try {
          await consumer.connect();
          console.log("Connected to Kafka");
          await consumer.subscribe({
               topics: ["topic_comment"],
               fromBeginning: true,
          });
          await consumer.run({
               eachMessage: async ({ topic, partition, message }) => {
                    try {
                         const parsedMessage = JSON.parse(
                              message.value.toString("utf8")
                         );
                         console.log("Received message:", parsedMessage);

                         await pushToElasticsearch({
                            index: 'milos_name',
                            body: parsedMessage
                         });curl -L -O https://artifacts.elastic.co/downloads/beats/elastic-agent/elastic-agent-8.12.0-linux-x86_64.tar.gz
tar xzvf elastic-agent-8.12.0-linux-x86_64.tar.gz
cd elastic-agent-8.12.0-linux-x86_64
sudo ./elastic-agent install --url=https://a4c408640d834369ac4d37e0a3e2e065.fleet.europe-west3.gcp.cloud.es.io:443 --enrollment-token=Rlk1bVlZMEJMUS1UMlN0TXBaYTE6ZzdfX0paUWRUZmFDZ0dmek90TWpuUQ==
     }
}

async function disconnectKafkaConsumer() {
     try {
          await consumer.disconnect();
          console.log("Disconnected from Kafka");
     } catch (error) {
          console.error("Error disconnecting from Kafka:", error);
     }
}

module.exports = {
     runKafkaConsumer,
     disconnectKafkaConsumer,
};


// await pushToElasticsearch(sampleData)
// const sampleData = {
//     index: 'your_index_name',
//     body: {
//       user: 'John Doe',
//       message: 'Hello, Elasticsearch!'
//     }
//   };