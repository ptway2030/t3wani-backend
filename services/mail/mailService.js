const nodemailer = require("nodemailer");
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const hogan  = require('hogan.js');
const fs = require('fs');


let transporter = nodemailer.createTransport({

    host: 'smtp.sendgrid.net',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: 'apikey',//keys.user,

        pass:'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'//keys.pass
    }

});


// async function sendVerifMail(name, email,_id) {
//     const ccemail = fs.readFileSync(__dirname + '/email.html', 'utf-8');
//     const comemail = hogan.compile(ccemail);
//     jwt.sign(
//         // payload as json:
//         {
//             name,
//             email,
//             _id
//          }, // to know which user
//         // secret
//         keys.jwtKey,
//         //callback
//         (err, token) => {
//             if (err) return err;

//             // response
//             const url =keys.mail_url+ `/api/confirmation/${token}`;
//             console.log(url)
//             transporter.sendMail({
//                 from: 'no-reply@ptway.net',
//                 to: email,
//                 subject: ' PTway نوّرت',
//                 html: comemail.render({name : name , email : url}),
//             });
//         }
//     )
// }


// async function companySendVerifMail(name, email,_id) {
//     const ccemail = fs.readFileSync(__dirname + '/com-email.html', 'utf-8');
//     const comemail = hogan.compile(ccemail);
//     jwt.sign(
//         // payload as json:
//         {
//             name,
//             email,
//             _id
//          }, // to know which user
//         // secret
//         keys.jwtKey,
//         // expire in hour
//         { expiresIn: '2d' },
//         //callback
//         (err, token) => {
//             if (err) return err;

//             // response
//             const url = keys.mail_url+`/api/com_confirmation/${token}`;
//             transporter.sendMail({
//                 from: 'no-reply@ptway.net',
//                 to: email,
//                 subject: ' PTway نوّرتوا',
//                 html: comemail.render({name : name , email : url}),
//             });
//         }
//     )
// }



// async function sendResetEmail(id, email , name) {
//     const ccemail = fs.readFileSync(__dirname + '/email-Reset.html', 'utf-8');
//     const comemail = hogan.compile(ccemail);

//     const url = keys.mail_url+`/api/reset?id=`+id;
//     transporter.sendMail({
//         from: 'no-reply@ptway.net',
//         to: email,
//         subject: ' PTway تغيير الرقم السري ',
//         html: comemail.render({name : name , email : url}),
//     });
// };


// send company order details to Admin (need to read Admins automaric soon)

async function sendOrderDetails(orderData) {
    const ccemail = fs.readFileSync(__dirname + '/orderEmail.html', 'utf-8');
        const comemail = hogan.compile(ccemail);

        transporter.sendMail({
            from: 'no-reply@taawoni.com',
            to: "s.aldekhil@ptway.net",
            subject: 'طلب متدربين ',
            html: comemail.render({companyName : orderData.companyName ,
                 email : orderData.email,
                phone: orderData.phone,
            city: orderData.city,
            sizeOfCompany:orderData.sizeOfCompany,
            CompanySpecialist:orderData.CompanySpecialist,
            Address:orderData.Address,
            sector:orderData.sector,
            superVisorName:orderData.superVisorName,
            createDate:orderData.createDate,
            typeOfOrder:orderData.typeOfOrder,
            Major:orderData.Major,
            gender:orderData.gender,
            salary:orderData.salary,
        }),
        });
}

exports.companyOrderMail = sendOrderDetails;