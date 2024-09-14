import React from 'react';

const Enrollment = ({ onEnroll }) => {
    return (
        <button
            className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg shadow-md hover:bg-indigo-800"
            onClick={onEnroll}
        >
            Enroll Now
        </button>
    );
};

export default Enrollment;
