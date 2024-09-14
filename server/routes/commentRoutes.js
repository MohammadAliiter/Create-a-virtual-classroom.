const express = require('express');
const { addComment } = require('../controllers/commentController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

// Add a new comment on a lecture
router.post('/', protect, addComment);

// Other routes for retrieving comments and nested comments

module.exports = router;
