import React, { useState, useEffect } from 'react';
import { addComment, getComments } from '../services/commentService';

const CommentSection = ({ lectureId }) => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    useEffect(() => {
        const fetchComments = async () => {
            const data = await getComments(lectureId);
            setComments(data);
        };
        fetchComments();
    }, [lectureId]);

    const handleAddComment = async (e) => {
        e.preventDefault();
        await addComment(newComment, lectureId);
        setNewComment('');
        const data = await getComments(lectureId);
        setComments(data);
    };

    return (
        <div className="bg-gray-50 p-6 mt-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-gray-700 mb-4">Comments</h3>
            <ul className="space-y-4">
                {comments.map((comment) => (
                    <li key={comment._id} className="bg-white p-4 rounded-lg shadow-sm">
                        {comment.content}
                    </li>
                ))}
            </ul>
            <form className="mt-6" onSubmit={handleAddComment}>
                <input
                    type="text"
                    placeholder="Add a comment"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                />
                <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700">
                    Post
                </button>
            </form>
        </div>
    );
};

export default CommentSection;
