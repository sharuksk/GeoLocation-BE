const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const loadFileSchema = new Schema ({
    fileName: {
        type: String,
        required: true
    },
    file64: {
        type: String,
        required: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
});


module.exports = LoadFile = mongoose.model('loadFile', loadFileSchema);
