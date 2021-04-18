import React, { useEffect, useState } from 'react';
import CourseCard from './CourseCard';
import './Courses.css';
const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/courses`)
        .then(res => res.json())
        .then(data => {
            setCourses(data);
            console.log(data);
        })
    }, [])
    return (
        <div id="courses">
            <h1 className="text-center text-brand mt-5">
                <i>A Group Of Brilliant Tutors</i> <br /> For
                Your One Beloved Child
            </h1>
            <div className="row">
                {courses &&
                    courses.map((course) => {
                        return (
                            <CourseCard course={course} />
                        );
                    })}
            </div>
        </div>
    );
};

export default Courses;