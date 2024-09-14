const mongoose = require('mongoose');

const unitSchema = new mongoose.Schema({
    title: { type: String, required: true },
    class: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' },
    sessions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Session' }]
});

module.exports = mongoose.model('Unit', unitSchema);
