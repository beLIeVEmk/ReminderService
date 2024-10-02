const { sender } = require("../config/emailConfig")


const sendEmail=(from,to,mailSubject,mailBody)=>{
    sender.sendMail({
        from,
        to,
        subject:mailSubject,
        text:mailBody
    })
}

module.exports={
    sendEmail
}