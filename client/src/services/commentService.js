const API_URL = 'http://localhost:5000/api/comments';

export const getComments = async (lectureId) => {
    const response = await fetch(`${API_URL}/lecture/${lectureId}`);
    if (!response.ok) throw new Error('Failed to fetch comments');
    return response.json();
};

export const addComment = async (content, lectureId) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ content, lectureId }),
    });
    if (!response.ok) throw new Error('Failed to add comment');
};
