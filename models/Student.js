const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
    id: { type: Number, unique: true },
    firstName: String,
    lastName: String,
    email: String,
    dateOfBirth: String,
  })

  module.exports = mongoose.model('Student', StudentSchema)