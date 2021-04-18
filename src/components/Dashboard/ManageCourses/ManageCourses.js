import {
    faEdit,
    faTrash
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from 'react';
const ManageCourses = () => {
    const [courses, setCourses] = useState([]);
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
            <h2>Enrolled Courses</h2>
            <div className="row shadow-sm py-2 bg-light">
                <div className="col-md-2">Name</div>
                <div className="col-md-2">Price</div>
                <div className="col-md-3">AddedBy</div>
                <div className="col-md-2">Status</div>
                <div className="col-md-2">Manage</div>
            </div>
            {courses &&
                courses.map((course) => {
                    return (
                        <div className="row shadow-sm my-3 py-2">
                            <div className="col-md-2">{course.name}</div>
                            <div className="col-md-2">{course.price}</div>
                            <div className="col-md-3">{course.email}</div>
                            <div className="col-md-2">{"status"}</div>
                            <div className="col-md-3">
                                <p>
                                    <span>
                                        <FontAwesomeIcon icon={faEdit} size="lg" color="teal" />
                                    </span>
                                    &nbsp;
                                    <span
                                        onClick={() => ""}
                                        style={{ cursor: "pointer" }}
                                    >
                                        <FontAwesomeIcon icon={faTrash} size="lg" color="crimson" />
                                    </span>
                                </p>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
};

export default ManageCourses;