companyControllers = require('../controllers/compaines');

module.exports = (app) => {

// to Create new company record
app.post('/api/postCompanyData', companyControllers.postCompanyData)


}