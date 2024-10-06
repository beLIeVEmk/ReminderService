const { where, Op } = require('sequelize');
const {NotificationTicket}=require('../models/index');
const { raw } = require('mysql2');

class NotificationTicketRepository{
    
    async createTicket(body){
        try {
            return await NotificationTicket.create(body);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getTicketsWithStatus(filter){
        try {
            return await NotificationTicket.findAll(
                {
                    where:{
                        [Op.and]:{
                            status:filter.status,
                            notificationTime:{[Op.lte]:new Date()}
                        }
                    }
                },{
                    raw:true
                }
            );
        } catch (error) {
            throw error
        }
    }

    async updateTicket(ticketId,data){
        try {
            return await NotificationTicket.update(
                {
                    ...data
                },
                {
                    where:{
                        id:ticketId
                    }
                },
                
            )
        } catch (error) {
            
        }
    }
}

module.exports={
    NotificationTicketRepository
}