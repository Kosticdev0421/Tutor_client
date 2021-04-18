import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../../App";
import AdminCourseCard from "./AdminCourseCard";
import UserCourseCard from "./UserCourseCard";
const EnrolledCoursesList = () => {
    const [courses, setCourses] = useState([]);
    const [currentUser, setCurrentUser] = useContext(userContext);
    useEffect(() => {
        fetch(`http://localhost:5000/enrolledCourses`, {
            headers: {
                "x-access-token": localStorage.getItem("ptToken"),
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("courses", data);
                setCourses(data);
            });
    }, []);
    return (
        <div className="row">
            <h2>Enrolled Courses</h2>
            {currentUser && currentUser.isAdmin && (
                <div className="row shadow-sm py-2 bg-light">
                    <div className="col-md-2">Name</div>
                    <div className="col-md-3">Email</div>
                    <div className="col-md-2">Course</div>
                    <div className="col-md-3">Payment Id</div>
                    <div className="col-md-2">Status</div>
                </div>
            )}
            {courses &&
                courses.map((course) => {
                    return currentUser && currentUser.isAdmin ? (
                        <AdminCourseCard course={course} />
                    ) : (
                        <UserCourseCard course={course} />
                    );
                })}
        </div>
    );
};

export default EnrolledCoursesList;
