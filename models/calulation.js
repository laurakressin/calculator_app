/**
 * Created by laurakressin on 10/8/15.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var calculationSchema = new Schema({
    firstNumber: Number,
    secondNumber: Number,
    operation: String
})

var calculation = mongoose.model('calculations', calculationSchema);

module.exports = calculation;