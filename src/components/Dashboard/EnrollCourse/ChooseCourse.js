import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const ChooseCourse = () => {
    const [courses, setCourses] = useState([]);
    const history = useHistory();
    useEffect(() => {
        fetch(`http://localhost:5000/courses`)
            .then((res) => res.json())
            .then((data) => {
                setCourses(data);
                console.log(data);
            });
    }, []);
    return (
        <div className="row">
            <p>Enroll in other courses:</p>
            {
                courses && courses.map(course => {
                    return (
                        <div className="col-md-4">
                            <div className="shadow-lg p-5 m-2 course">
                                <img src={course.coverPhotoLink} alt="" className="img-fluid" />
                                <h4 className="highlighted-text">{course.name}</h4>
                                <h3>${course.price}</h3>
                                <p>{course.description}</p>
                                    <button className="btn btn-brand" onClick={() => {
                                        history.push(`/dashboard/enroll/${course._id}`)
                                        window.location.reload();
                                    }}>Enroll</button>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default ChooseCourse;