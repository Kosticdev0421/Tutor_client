import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import CourseCard from '../../Home/Courses/CourseCard';

const ChooseCourse = () => {
    const [courses, setCourses] = useState([]);
    const history = useHistory();
    useEffect(() => {
        fetch(`https://pro-tutors.herokuapp.com/courses`)
            .then((res) => res.json())
            .then((data) => {
                setCourses(data);
                console.log(data);
            });
    }, []);
    return (
        <div className="row">
            <h4>Enroll in:</h4>
            {
                courses && courses.map(course => {
                    return (
                        <CourseCard course={course} />
                    );
                })
            }
        </div>
    );
};

export default ChooseCourse;