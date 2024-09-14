const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
    title: { type: String, required: true },
    unit: { type: mongoose.Schema.Types.ObjectId, ref: 'Unit' },
    lectures: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Lecture' }]
});

module.exports = mongoose.model('Session', sessionSchema);
