const {Company} = require('../models/company');
const {companyOrder} = require('../models/companyOrder');
const {companyOrderMail} = require('../services/mail/mailService');

// create new Company record
exports.postCompanyData = async (req,res) =>{
    let orderId;
    try{
        // create new company model
        let company = new Company({
            companyName: req.body.companyName,
            email: req.body.email,
            phone: req.body.phone,
            city: req.body.city,
            sizeOfCompany: req.body.sizeOfCompany,
            CompanySpecialist: req.body.CompanySpecialist,
            Address: req.body.Address,
            sector: req.body.sector,
            superVisorName:req.body.superVisorName,
            createDate: Date.now()

        }).save()
        .then( result =>{
             orderId = createCompanyOrder(req.body,result._id);

        })

        company.orders.push(orderId); // add order to orders array for a company
        company.save(); // save data
        // send mail to admin notify a new order with details //
        companyOrderMail(req.body);
        //finish
        res.status(200).send("Create Successful !")

    }catch(error){
        console.log(error)
        res.status(401).send(error)

    }
}

function createCompanyOrder(Data, companyId) {

    try{

        new companyOrder({
            company:companyId,
            typeOfOrder: Data.typeOfOrder,
            Major: Data.Major,
            gender: Data.gender,
            salary: Data.salary,
            createDate: Date.now()

        }).save()
        .then( result =>{
           return result._id

        })

    }catch(error){
        console.log(error)
    }
}