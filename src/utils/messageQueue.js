const amqp=require('amqplib');
const serverConfig = require('../config/serverConfig');

const createChannel=async ()=>{
    try {
        const conn=await amqp.connect(serverConfig.MESSAGE_BROKER_URL);// has multiple queues - conn to rabbitMQ server
        const channel=await conn.createChannel()// Connect to queues

        //Message broker helps to distribute messages btw queues ( exchange ditributer)
        // EXCHANGE_NAME - name of the distributer
        // binding_key - distributer connected to multiple queue - this tells which queue to connect to
        await channel.assertExchange(serverConfig.EXCHANGE_NAME,'direct',false)
        return channel
    } catch (error) {
        console.log(error);
        throw error;
    }
    
}

const subscribeMessage=async (channel,service,binding_key)=>{
    try {
        const applicationQueue=await channel.assertQueue(serverConfig.QUEUE_NAME);

        channel.bindQueue(applicationQueue.queue,serverConfig.EXCHANGE_NAME,binding_key)

        channel.consume(applicationQueue.queue,(msg)=>{
            console.log('recieved data');
            console.log(msg.content.toString());
            channel.ack(msg)
        })
    } catch (error) {
        console.log(error)
        throw error
    }
}

const publishMessage=async (channel,message,binding_key)=>{
    try {
        

        await channel.publish(EXCHANGE_NAME,binding_key,Buffer.from(message))
    } catch (error) {
        console.log(error)
        throw error
    }
}

module.exports={
    subscribeMessage,
    createChannel,
    publishMessage
}