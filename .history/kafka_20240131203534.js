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



async function getUserInfo(userId){
    return new Promise((resolve,reject)=>{

    const sql='SELECT * FROM user WHERE userId=?';

    connection.query(sql,[userId],(err,result)=>{
        if(err){
            reject(err);
        }else{
            if(result.length>0){
                const user=result[0];
                resolve({
                    userId:user.userId,
                    username:user.username,
                    email:user.email
                });
            }else{
                reject(err);
            }
        }


    });
})
}










const createComment=async(req,res,ws)=>{

    const userId=req.params.userId;
    const {postId,content}=req.body;

        const newComment=new Comment(
            0,
            postId,
            userId,
            content
        );

        Comment.createComment(newComment)
        .then(async response=>{
            newComment.commentId=response[0].commentId;
            newComment.timestamp=response[0].timestamp;
            await sendCommentMessage(newComment);
            await runKafkaConsumer();
            return res.status(200).send(`Comment  created`)
        }).catch(err=>{
            console.log("Error tokom cuvanja komentara:\n",err)
            return res.status(-1005).send("Error while creating comment");
        })

    
         

};


const getAllComments=async(req,res)=>{

    const postId=req.params.postId;

    const sql=`SELECT * FROM comment WHERE postId = ?`;

    connection.query(sql,[postId],(err,result)=>{
        if(err){
            console.log(err);
            return res.status(500).send("Error while loading comments")
        }else{
            
            return res.status(200).send(result);
        }

    })

};


module.exports={createComment,
    getAllComments
}