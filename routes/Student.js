const express =  require("express");
const {getList, getStudent, addStudent, updateStudent, deleteStudent} = require("../controllers/Student");
const {verifyToken} = require("../Auth/auth");
const router = express.Router();
const Student = require('../models/Student')


router.get('/students', verifyToken, getList)
router.post('/addStudent', verifyToken, addStudent)
router.get('/student:id', verifyToken, getStudent)
router.put('/student:id', verifyToken, updateStudent)
router.delete('/student:id', verifyToken, deleteStudent)

module.exports = router;