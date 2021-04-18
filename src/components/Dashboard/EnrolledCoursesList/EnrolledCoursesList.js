import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../../App";
import AdminCourseCard from "./AdminCourseCard";
import UserCourseCard from "./UserCourseCard";
const EnrolledCoursesList = () => {
    const [enrolledCourses, setEnrolledCourses] = useState([]);
    const [currentUser, setCurrentUser] = useContext(userContext);
    useEffect(() => {
        fetch(`http://localhost:5000/enrolledCourses`, {
            headers: {
                "x-access-token": localStorage.getItem("ptToken"),
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setEnrolledCourses(data);
            });
    }, []);
    return (
        <div className="row">
            <h2 className="text-brand text-center m-3">Enrolled Courses</h2>
            {currentUser && currentUser.isAdmin && (
                <div className="row shadow-sm py-2 bg-light">
                    <div className="col-md-2">Name</div>
                    <div className="col-md-3">Email</div>
                    <div className="col-md-2">Course</div>
                    <div className="col-md-3">Payment Id</div>
                    <div className="col-md-2">Status</div>
                </div>
            )}
            {enrolledCourses.length < 1 && (
                <p className="text-center">
                    You haven't enrolled in any of our courses yet! <br /> <b>Hurry up</b>, <br/> join and
                    explore these great contents!
                </p>
            )}
            {enrolledCourses &&
                enrolledCourses.map((course) => {
                    return currentUser && currentUser.isAdmin ? (
                        <AdminCourseCard enrolledCourse={course} />
                    ) : (
                        <UserCourseCard enrolledCourse={course} />
                    );
                })}
        </div>
    );
};

export default EnrolledCoursesList;
