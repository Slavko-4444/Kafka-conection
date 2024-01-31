const {runKafkaConsumer, disconnectKafkaConsumer} = require('./kafka')
const {latest_post} = require('./elastic')

runKafkaConsumer()
