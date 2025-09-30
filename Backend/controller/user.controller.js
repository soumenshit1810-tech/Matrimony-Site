let User = require('../models/user.model')
const bcrypt = require('bcryptjs')
const jwt =require('jsonwebtoken')

module.exports.userRegister = async (req, res) => {
    let { name, email, password } = req.body
    if (!name || !email || !password) {
        return res.status(400).json({ message: "All Fields Are Required", success: false })
    } else {
        try {
            let existingUser = await User.findOne({ email: email })
            console.log(existingUser);

            if (existingUser) {
                return res.status(409).json({ message: "User Already Exists", success: false })
            }
            let hasshedPassword = await bcrypt.hashSync(password, 4)
            let newUser = await User.create({
                name,
                email,
                password: hasshedPassword
            })
            delete newUser._doc.password
            return res.status(201).json({ message: "User Registared Successfully!", success: true, user: newUser })
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Internal Servar Problem", success: false })
        }
    }
}
module.exports.userLogin = async (req, res) => {
    let { email, password } = req.body
    if (!email || !password) {
        return res.status(400).json({ message: "All Fields Are Required", success: false })
    } else {
        try {
            let user = await User.findOne({ email: email })
            if (!user) {
                return res.status(404).json({ message: "User Not Found!", success: false })
            } else {
                let isMatch = await bcrypt.compare(password, user.password)
                if (!isMatch) {
                    return res.status(401).json({ message: "User Not Found!", success: false })
                }
                delete user._doc.password

                let payload={
                    _id:user._id,
                    name:user.name,
                    email:user.email
                }
                let token=await jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:"30d"})
                return res.status(200).json({ message: "User LoggedIn Succesfully", success: true, user,token })
            }
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Internal Servar Problem", success: false })
        }
    }

}
module.exports.userProfile = (req, res) => {
    return res.send("User Profile logic")
}