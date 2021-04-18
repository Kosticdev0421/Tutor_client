import React from 'react';
import { Link } from 'react-router-dom';
import './Courses.css';
const CourseCard = ({course}) => {
    return (
        <div className="col-md-3">
            <div className="shadow-lg p-3 m-2 course">
                <img src={course.coverPhotoLink} alt="" className="img-fluid" />
                <h2 className="highlighted-text">{course.name}</h2>
                <h2>${course.price}</h2>
                <p>{course.description}</p>
                <Link to={`/dashboard/enroll/${course._id}`}>
                    <button className="btn btn-brand">Enroll</button>
                </Link>
            </div>
        </div>
    );
};

export default CourseCard;