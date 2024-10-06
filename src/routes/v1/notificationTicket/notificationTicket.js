const express = require("express");
const { NotificationTicketController } = require("../../../controllers/NotificationTicketController");

const router=express.Router();

const notificationController=new NotificationTicketController();
router.post('/createNotification',notificationController.createTicket);

module.exports=router