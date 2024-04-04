const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const BackupSchema = new Schema ({
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


module.exports = Backup = mongoose.model('backup', BackupSchema);
