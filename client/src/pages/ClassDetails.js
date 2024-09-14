import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getClassById } from '../services/classService';
import LectureView from '../components/LectureView';
import Enrollment from '../components/Enrollment';

const ClassDetails = () => {
    const { id } = useParams();
    const [classDetails, setClassDetails] = useState(null);

    useEffect(() => {
        const fetchClassDetails = async () => {
            const data = await getClassById(id);
            setClassDetails(data);
        };
        fetchClassDetails();
    }, [id]);

    const handleEnroll = () => {
        // Logic to handle enrollment
    };

    if (!classDetails) return <div>Loading...</div>;

    return (
        <div className="p-8">
            <h2 className="text-3xl font-bold mb-4">{classDetails.name}</h2>
            {classDetails.lectures.map((lecture) => (
                <LectureView key={lecture._id} lecture={lecture} />
            ))}
            <Enrollment onEnroll={handleEnroll} />
        </div>
    );
};

export default ClassDetails;
