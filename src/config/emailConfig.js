require('dotenv').config()
const nodeMailer=require('nodemailer')

console.log("ID password",process.env.EMAIL_ID,process.env.EMAIL_PASS)
const sender=nodeMailer.createTransport({
    service:'Gmail',
    auth:{
        user:process.env.EMAIL_ID,
        pass:process.env.EMAIL_PASS
    }
})

module.exports={sender}