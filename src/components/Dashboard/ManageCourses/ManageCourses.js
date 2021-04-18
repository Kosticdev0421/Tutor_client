import {
    faEdit,
    faTrash
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from 'react';
const ManageCourses = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch(`https://pro-tutors.herokuapp.com/courses`)
            .then((res) => res.json())
            .then((data) => {
                setCourses(data);
                console.log(data);
            });
    }, []);

    if (loading) {
        return (
            <div>
                <h1>Processing your request...</h1>
            </div>
        );
    }
    return (
        <div className="row">
            <h2>Enrolled Courses</h2>
            <div className="row shadow-sm py-2 bg-light">
                <div className="col-md-3">Name</div>
                <div className="col-md-2">Price</div>
                <div className="col-md-3">AddedBy</div>
                <div className="col-md-2">Status</div>
                <div className="col-md-2">Manage</div>
            </div>
            {courses &&
                courses.map((course) => {
                    return (
                        <div className="row shadow-sm my-3 py-2">
                            <div className="col-md-3">{course.name}</div>
                            <div className="col-md-2">{course.price}</div>
                            <div className="col-md-3">{course.email}</div>
                            <div className="col-md-2">{"status"}</div>
                            <div className="col-md-2">
                                <span style={{ cursor: "pointer" }}>
                                    <span>
                                        <FontAwesomeIcon icon={faEdit} size="lg" color="teal" />
                                    </span>
                                    &nbsp;
                                    <span onClick={() => deleteCourse(course._id, course.name)}>
                                        <FontAwesomeIcon icon={faTrash} size="lg" color="crimson" />
                                    </span>
                                </span>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
    
    function deleteCourse(id, name){
        const confirm = window.confirm("Are you sure to delete: " + name);
        if (confirm) {
            setLoading(true);
            fetch(`https://pro-tutors.herokuapp.com/courses/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.deleted) {
                        window.location.reload();
                    } else {
                        setLoading(false);
                        alert(data.message);
                    }
                })
                .catch((err) => {
                    setLoading(false);
                    alert("Could not delete the selected course!");
                });
        }
    }
};

export default ManageCourses;