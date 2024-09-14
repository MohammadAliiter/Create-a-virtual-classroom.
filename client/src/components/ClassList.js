import React from 'react';
import { Link } from 'react-router-dom';

const ClassList = ({ classes }) => {
    return (
        <div className="space-y-4">
            {classes.map((classItem) => (
                <div key={classItem._id} className="p-4 border border-gray-300 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold">{classItem.name}</h3>
                    {classItem.instructor ? (
                        <p>Instructor: {classItem.instructor.username}</p>
                    ) : (
                        <p>Instructor: Not assigned</p>
                    )}
                    <Link
                        to={`/class/${classItem._id}`}
                        className="text-blue-600 hover:text-blue-800 font-semibold"
                    >
                        View Details
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default ClassList;
