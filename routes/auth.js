authController = require('../controllers/auth')


module.exports = (app) => {

    // to Create new company record
    app.post('/api/adminLogin', authController.userLogin)


    }
