const User = require('../models/userModel');

exports.postNewUser = (req, res, next) => {
    console.log(req.body);
    let newUser = new User(req.body.nick, req.body.email, req.body.password);
    newUser.save();
    res.redirect('/users');
};

exports.getNewUser = (req, res, next) => {
    res.render('newUser');   
};

exports.getUsers = (req, res, next) => {
    User.show()
    .catch((err) => {
        console.log(err);
        return [];
    })
    .then((users) => {
        res.render('users', { 
            users: users,
        })
    })
};

exports.getEditUser = (req, res, next) =>{
    const id = req.params.iduser;
    User.getById(id)
    .then((user) => {
        res.render('editUser', {
            user : user
        });
        console.log(user);
    })
    .catch((err) =>{
        console.log(err); 
    });
}


/*module.exports = [
    postNewUser,
    getNewUser,
    getUsers,
];*/