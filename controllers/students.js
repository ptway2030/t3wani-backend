const {student} = require('../models/student');

// create a new student model
exports.postStudentForm = async (req,res) =>{


    try{

        new student({
            fullName: req.body.fullName,
            email: req.body.email,
            phone: req.body.phone,
            city: req.body.city,
            university: req.body.university,
            Major: req.body.Major,
            trainingSemester: req.body.trainingSemester,
            trainingSemesterMonth: req.body.trainingSemesterMonth,
            trainingSemesterYear:req.body.trainingSemesterYear,
            createDate: Date.now()

        }).save()
        .then( result =>{
            res.status(200).send(result);

        })

    }catch(error){
        console.log(error)
        res.status(401).send(error)
    }


}

// get all user data
exports.getAllStudentsData = async (req,res) =>{
    let result = await student.find();
    if(!result) return res.status(400).send("dont have any student");
    
    res.status(200).json({
        result: result
    })
}