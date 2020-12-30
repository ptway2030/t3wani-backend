const {Admin} = require('../models/admin');

exports.userLogin = async (req, res) => {

    let admin = await Admin.findOne({ email: req.body.email.toLowerCase()});
    if (!admin) return res.status(400).send('خطأ في البريد أو الرقم السرّي');

    const validPassword = await bcrypt.compare(req.body.password, admin.password, (error, result) => {
      if (!result) return res.status(400).send('خطأ في البريد أو الرقم السرّي');

      const token = user.generateAuthToken();
      res.status(200).json({
        token: token,
        isAdmin: user.isAdmin ? true: false,
      });;
    });

  };
