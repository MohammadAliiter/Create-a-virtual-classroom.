const express = require('express');
const {
    createLecture,
    getLecturesByClass,
    getLectureById,
    updateLecture,
    deleteLecture
} = require('../controllers/lectureController');
const { protect, authorize } = require('../middleware/authMiddleware');
const router = express.Router();

// Create a new lecture (Instructor or Admin only)
router.post('/', protect, authorize('instructor', 'admin'), createLecture);

// Get all lectures for a class
router.get('/class/:classId', protect, getLecturesByClass);

// Get a specific lecture by ID
router.get('/:id', protect, getLectureById);

// Update a lecture (Instructor or Admin only)
router.put('/:id', protect, authorize('instructor', 'admin'), updateLecture);

// Delete a lecture (Instructor or Admin only)
router.delete('/:id', protect, authorize('instructor', 'admin'), deleteLecture);

module.exports = router;
