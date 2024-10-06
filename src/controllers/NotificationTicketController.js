const { NotificationTicketService } = require("../services/ticketService")

class NotificationTicketController{
    constructor(){
        this.notifService=new NotificationTicketService()
    }

    createTicket=async (req,res)=>{
        try {
            const createTicketResponse=await this.notifService.createNotificationTicket(req.body)
            res.status(201).json({
                status:201,
                message:"success",
                data:createTicketResponse
            })
        } catch (error) {
            
        }
    }
}

module.exports={
    NotificationTicketController
}