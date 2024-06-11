const mongoose = require('mongoose')


const studentSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    rollnumber: {
        type: String,
        required: true
    },
    attendence: {
        type: Boolean,
        required: true,
        default: false
    }

})

module.exports = mongoose.model('Student', studentSchema)