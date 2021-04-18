import React from 'react';

const AdminCourseCard = ({course}) => {
    const {displayName, email} = course.currentUser;
    const { coverPhotoLink, name, description } = course.course;
    return (
        <div className="row shadow-sm my-3 py-2">
            <div className="col-md-2">{displayName}</div>
            <div className="col-md-3">{email}</div>
            <div className="col-md-2">{name}</div>
            <div className="col-md-3">{course.paymentId}</div>
            <div className="col-md-2">{"status"}</div>
        </div>
    );
};

export default AdminCourseCard;