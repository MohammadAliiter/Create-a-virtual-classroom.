import React from 'react';
import CommentSection from './CommentSection';

const LectureView = ({ lecture }) => {
    return (
        <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-4">{lecture.title}</h3>
            <p className="text-gray-600 mb-6">{lecture.content}</p>
            <div className="border-t border-gray-200 mt-4 pt-4">
                <h4 className="text-lg font-semibold">Discussion</h4>
                <CommentSection lectureId={lecture._id} />
            </div>
        </div>
    );
};

export default LectureView;
