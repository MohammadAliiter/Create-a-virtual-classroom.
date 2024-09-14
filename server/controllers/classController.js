const Class = require('../models/Class');
const Unit = require('../models/Unit');
const Session = require('../models/Session');
const Lecture = require('../models/Lecture');

exports.createClass = async (req, res) => {
    const { name, instructorId } = req.body;
    try {
        const newClass = await Class.create({ name, instructor: instructorId });
        res.json(newClass);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


exports.getClasses = async (req, res) => {
    try {
        const classes = await Class.find().populate('instructor', 'username'); // Populate instructor details if needed
        res.json(classes);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

