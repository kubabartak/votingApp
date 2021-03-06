// structure of polls database

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pollSchema = new Schema({
    poll_name: String,
    poll_options: [{answer_name: String,
    				answer_vote: Array}],
    poll_author: String,
    poll_author_id: String
}, {timestamps: true});

const ModelClass = mongoose.model('poll', pollSchema);

module.exports=ModelClass;