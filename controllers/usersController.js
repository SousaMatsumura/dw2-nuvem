const User = require('../models/userModel');

exports.postNewUser = (req, res, next) => {
    console.log(req.body);
    let newUser = new User(req.body.nick, req.body.email, req.body.password);
    newUser.save();
    res.redirect('/users');
};

exports.getNewUser = (req, res, next) => {
    res.render('newUSer');   
};

exports.getUsers = (req, res, next) => {
    res.render('users', {
      'users': User.show(),
    });
};

/*module.exports = [
    postNewUser,
    getNewUser,
    getUsers,
];*/