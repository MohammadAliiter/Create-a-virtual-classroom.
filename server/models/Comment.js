const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    content: { type: String, required: true },
    lecture: { type: mongoose.Schema.Types.ObjectId, ref: 'Lecture' },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    parentCommentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Comment', default: null },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Comment', commentSchema);
