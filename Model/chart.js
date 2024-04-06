const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ChartData = new Schema ({
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


module.exports = ChartData = mongoose.model('chartData', ChartData);
