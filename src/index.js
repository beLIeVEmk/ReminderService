const express=require('express')
const configServer=require('./config/serverConfig');
const { sendEmail } = require('./services/emailService');
const apiRoutes=require('./routes/index');
const { CronJobs } = require('./utils/jobs');
const cronJobs=new CronJobs();

const setupServer=()=>{
    const app=express();
    app.use(express.json())
    app.use('/api',apiRoutes)
    app.listen(configServer.PORT,()=>{
        console.log('server up and listen at port ',configServer.PORT)
        cronJobs.cronTicketSchedule()
        /*sendEmail(
            'bookingservice121@gmail.com',
            'bookingservice121@gmail.com',
            'THis is testing',
            'Hi'
        )*/
    })
}

setupServer()