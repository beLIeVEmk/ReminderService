const express=require('express')

const router=express.Router()

const notifRoutes=require('./notificationTicket/notificationTicket')

router.use('/notification',notifRoutes)

module.exports=router;