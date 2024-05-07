const express =  require("express");
const {register, login} = require("../controllers/User");
const {verifyToken} = require("../Auth/auth");
const router = express.Router();


router.post('/register', verifyToken, register);
router.post('/login', login);

module.exports = router;