import React, { useState, useEffect } from 'react';
import { getClasses } from '../services/classService';
import ClassList from '../components/ClassList';

const Dashboard = () => {
    const [classes, setClasses] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchClasses = async () => {
            try {
                const data = await getClasses();
                setClasses(data);
            } catch (error) {
                setError(error.message);
            }
        };
        fetchClasses();
    }, []);

    if (error) return <div>Error: {error}</div>;
    if (classes.length === 0) return <div>No classes available</div>;

    return (
        <div className="p-8">
            <h2 className="text-3xl font-bold mb-6">Dashboard</h2>
            <ClassList classes={classes} />
        </div>
    );
};

export default Dashboard;
