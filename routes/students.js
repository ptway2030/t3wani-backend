studentControllers = require('../controllers/students');

module.exports = (app) => {

// to Create new student record
app.post('/api/postStudentData', studentControllers.postStudentForm)



}