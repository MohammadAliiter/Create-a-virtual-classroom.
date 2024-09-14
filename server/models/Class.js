const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
    name: { type: String, required: true },
    instructor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    units: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Unit' }]
});

module.exports = mongoose.model('Class', classSchema);
