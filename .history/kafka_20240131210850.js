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

async function runKafkaConsumer() {
    try{

    }
    catch (err){

    }
     
     // catch((error) => {
     //   console.error("Error connecting to Kafka:", error);
     // });
}

async function disconnectKafkaConsumer() {
    try {
      await consumer.disconnect();
      console.log('Disconnected from Kafka');
    } catch (error) {
      console.error('Error disconnecting from Kafka:', error);
    }
  }


module.exports = {
    runKafkaConsumer,
    disconnectKafkaConsumer,
}
