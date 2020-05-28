const User = require('../../models/users')

const register = (req, res, next) => {
    const newUser = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email
    })

    newUser.save()
        .then(data => {
            res.status(201).json({
                message: 'success'
            })
        })
        .catch(err => {
            if (err) {
                res.status(500).json({
                    message: {
                        firstname: err.errors.firstname.message,
                        lastname: err.errors.lastname.message,
                        email: err.errors.email.message,
                    }
                })
            }
        })
}

module.exports = {
    register
}