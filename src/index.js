const express=require('express')
const configServer=require('./config/serverConfig');
const { sendEmail } = require('./services/emailService');

const setupServer=()=>{
    const app=express();
    app.use(express.json())
    app.listen(configServer.PORT,()=>{
        console.log('server up and listen at port ',configServer.PORT)
        /*sendEmail(
            'bookingservice121@gmail.com',
            'bookingservice121@gmail.com',
            'THis is testing',
            'Hi'
        )*/
    })
}

setupServer()