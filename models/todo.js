const mongoose = require('mongoose');
const TodoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    done: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Todo', TodoSchema);