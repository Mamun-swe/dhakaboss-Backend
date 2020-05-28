const User = require('../../models/users')

const register = async (req, res, next) => {

    try {
        const newUser = new User({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role
        })

        const user = await User.findOne({ 'email': req.body.email })

        if (user) {
            res.status(200).json({
                message: "Account already created, Use another e-mail address"
            })
        } else {
            const createUser = await newUser.save()
            if (createUser) {
                res.status(200).json({
                    createUser
                })
            }
        }
    } catch (err) {
        res.status(500).json({
            message: err.errors
        })
    }


}

module.exports = {
    register
}