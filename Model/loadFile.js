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
    videoOrientation: {
        type: String,
        required: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    },
    bikes: {
        type: Number
    },
    buses: {
        type: Number
    },
    cars: {
        type: Number
    },
    trucks: {
        type: Number
    },
    outputVideo: {
        type: String
    },
});


module.exports = LoadFile = mongoose.model('loadFile', loadFileSchema);
