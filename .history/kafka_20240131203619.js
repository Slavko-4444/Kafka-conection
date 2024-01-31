const { Kafka,Partitioners, logLevel } = require('kafkajs');

// Kreiramo Kafka producenta sa odgovarajućom konfiguracijom
const kafka = new Kafka({
    clientId: 'user-service',
    logLevel: logLevel.INFO,
    brokers: ['pkc-4r087.us-west2.gcp.confluent.cloud:9092'], 
    ssl: true,
    sasl: {
      mechanism: 'plain',
      username: 'J5Z224QZSXCMZDW4', 
      password: 'w9drey8M7aJ+OSIP/5KTceRGPFPO5yQcJ6lvhiOmeyxqdVHx3rsSTiU1Fmx9fpjZ' 
  },
  createPartitioner: Partitioners.LegacyPartitioner 
  });

  const consumer = kafka.consumer({ groupId: 'milos-group' });

function runKafkaConsumer() {
  consumer
    .connect()
    .then(() => {
      console.log("Connected to Kafka");
      consumer.subscribe({ topic: "topic_comment", fromBeginning: true });
      consumer.run({
           eachMessage: async ({ topic, partition, message }) => {
                const parsedMessage = JSON.parse(
                     message.value.toString("utf8")
                );
                console.log("Received message:", parsedMessage);
           },
      });
    })
    .catch((error) => {
      console.error("Error connecting to Kafka:", error);
    });
}








module.exports={createComment,
}