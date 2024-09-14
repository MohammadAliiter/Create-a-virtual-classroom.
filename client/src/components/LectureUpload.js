import React, { useState } from 'react';
import { uploadLecture } from '../services/lectureService';

const LectureUpload = ({ classId }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleUpload = async (e) => {
        e.preventDefault();
        try {
            await uploadLecture(classId, title, content);
            setTitle('');
            setContent('');
            alert('Lecture uploaded successfully!');
        } catch (error) {
            console.error('Upload error', error);
        }
    };

    return (
        <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Upload New Lecture</h3>
            <form onSubmit={handleUpload}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg mb-4"
                    required
                />
                <textarea
                    placeholder="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg mb-4"
                    required
                ></textarea>
                <button
                    type="submit"
                    className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-800 font-semibold"
                >
                    Upload
                </button>
            </form>
        </div>
    );
};

export default LectureUpload;
