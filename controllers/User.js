const User = require("../models/User")
const jwt = require("jsonwebtoken")

module.exports = {
// register method
    register: async (req, res, next) => {
        const { username, password } = req.body;
        try {
            const user = await User.findOne({ username: username  });
            if (user) {
                return res.status(500).json("This user already exists.");
            }
            const saveuser = await User.create({
                username: username,
                password: password,
                isAdmin: false
            });
            await saveuser.save();
            res.status(200).json("User created");
        } catch (error) {
            next(error)
        }       
    },
//login method
    login: async (req,res,next) => {
        try {
            if(!req.body.username || !req.body.password) {
                return next(ApiError.NotFound("Please input values."))
            }
        const user = await User.findOne({username: username});
        if (user) {
            const isMatch = await user.matchPassword(req.body.password);
            const token = jwt.sign({id:user._id, username: username},"collo");
            if (isMatch && token) {
                const {password, ...otherDetails} = user._doc;
                res.status(200).json({user:{...otherDetails,token}});
            }
        }
        return res.status(400).json("Invalid username or password.");
        } catch (error) {
        next(error)
        };
    }

}
