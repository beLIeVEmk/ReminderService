const cron=require('node-cron')
const { NotificationTicketService } = require('../services/ticketService')
const { sendEmail } = require('../services/emailService')
const { sender } = require('../config/emailConfig')
const serverConfig = require('../config/serverConfig')

class CronJobs{

    constructor(){
        this.notiService=new NotificationTicketService()
    }
    cronTicketSchedule=async ()=>{
        cron.schedule('*/2 * * * *',async ()=>{
            const tickets=await this.notiService.getNotificationByStatus({status:"pending"})
            for(let ticket of tickets){
                sender.sendMail({
                    from:serverConfig.email,
                    to:ticket.recipientMail,
                    subject:ticket.subject,
                    text:ticket.content
                }).then(async (res)=>{
                    await this.notiService.updateTicket(ticket.id,{status:"success"})
                }).catch((err)=>{
                    console.log(err)
                })
            }
        }) 
    }
}
module.exports={
    CronJobs
}