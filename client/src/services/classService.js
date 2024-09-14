const API_URL = 'http://localhost:5000/api/classes';

export const getClasses = async () => {
    const response = await fetch(API_URL, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
    });
    if (!response.ok) throw new Error('Failed to fetch classes');
    return response.json();
};

export const getClassById = async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
    });
    if (!response.ok) throw new Error('Failed to fetch class details');
    return response.json();
};
