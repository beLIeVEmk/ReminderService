const { NotificationTicketRepository } = require("../repositories/ticketRepository");

class NotificationTicketService{
    constructor(){
        this.notifRepo=new NotificationTicketRepository();
    }

    async createNotificationTicket(body){
        try {
            return await this.notifRepo.createTicket(body)
        } catch (error) {
            throw error
        }
    }

    async getNotificationByStatus(filter){
        try {
            return await this.notifRepo.getTicketsWithStatus(filter)
        } catch (error) {
            throw error
        }
    }

    async updateTicket(ticketId,data){
        try {
            return await this.notifRepo.updateTicket(ticketId,data);
        } catch (error) {
            throw error
        }
    }
}

module.exports={
    NotificationTicketService
}