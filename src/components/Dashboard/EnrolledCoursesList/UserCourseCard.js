import React from 'react';

const UserCourseCard = ({ enrolledCourse }) => {
    const { coverPhotoLink, name, description, status } = enrolledCourse.course;
    return (
        <div className="col-md-4 shadow-sm">
            <div className="row">
                <div className="col-md-8">
                    <img
                        src={coverPhotoLink}
                        alt=""
                        className="img-fluid"
                        style={{ maxWidth: "100px" }}
                    />
                </div>
                <div className="col-md-4">
                    <button className={`btn btn-${status === "Finished" ? "success" : "warning"}`}>
                        {status}
                    </button>
                </div>
            </div>
            <div>
                <h4>{name}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default UserCourseCard;