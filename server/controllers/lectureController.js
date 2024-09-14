const Lecture = require('../models/Lecture');
const Class = require('../models/Class');


exports.createLecture = async (req, res) => {
    const { classId, title, content } = req.body;
    try {
        const newLecture = new Lecture({ classId, title, content });
        await newLecture.save();

        
        await Class.findByIdAndUpdate(classId, { $push: { lectures: newLecture._id } });

        res.status(201).json(newLecture);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


exports.getLecturesByClass = async (req, res) => {
    const { classId } = req.params;
    try {
        const lectures = await Lecture.find({ classId });
        res.status(200).json(lectures);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get a specific lecture by ID
exports.getLectureById = async (req, res) => {
    const { id } = req.params;
    try {
        const lecture = await Lecture.findById(id);
        if (!lecture) {
            return res.status(404).json({ error: 'Lecture not found' });
        }
        res.status(200).json(lecture);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update a lecture
exports.updateLecture = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    try {
        const updatedLecture = await Lecture.findByIdAndUpdate(id, { title, content }, { new: true });
        if (!updatedLecture) {
            return res.status(404).json({ error: 'Lecture not found' });
        }
        res.status(200).json(updatedLecture);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a lecture
exports.deleteLecture = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedLecture = await Lecture.findByIdAndDelete(id);
        if (!deletedLecture) {
            return res.status(404).json({ error: 'Lecture not found' });
        }

        // Remove the lecture from the class
        await Class.findByIdAndUpdate(deletedLecture.classId, { $pull: { lectures: id } });

        res.status(200).json({ message: 'Lecture deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
