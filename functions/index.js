const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

const cors = require('cors')({origin: true});
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
admin.initializeApp();

/**
* Here we're using Gmail to send 
*/
let transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    auth: {
        user: gmailEmail,
        pass: gmailPassword
    }
}));

exports.sendMail = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
      
           const mailOptions = {
            from: 'Abhishek Yadav <abhiakkem96@gmail.com>', // Something like: Jane Doe <janedoe@gmail.com>
            to: req.body.email,
            subject: 'Demo email', // email subject
            text: 'i am Abhishek Yadav Akkem.'
        };
  
        //transporter.sendMail(mailOptions);
        // returning result
        return transporter.sendMail(mailOptions, (erro, info) => {
            if(erro){
                return res.send(erro.toString());
            } 
            else {
                return res.send('Sended');
            }
        });
    });    
});


