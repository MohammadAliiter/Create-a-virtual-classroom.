const express = require('express');
const { createClass, getClasses } = require('../controllers/classController');
const { protect, authorize } = require('../middleware/authMiddleware');
const router = express.Router();

// Create a new class (Instructor or Admin only)
router.post('/', protect, authorize('instructor', 'admin'), createClass);

// Get all classes
router.get('/', protect, getClasses);

module.exports = router;
