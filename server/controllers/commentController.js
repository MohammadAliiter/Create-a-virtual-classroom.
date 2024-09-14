const Comment = require('../models/Comment');

exports.addComment = async (req, res) => {
    const { content, lectureId, parentCommentId } = req.body;
    const userId = req.user.id;
    try {
        const comment = await Comment.create({ content, lecture: lectureId, user: userId, parentCommentId });
        res.json(comment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


