import React from 'react';

const AdminCourseCard = ({ enrolledCourse }) => {
    const { displayName, email } = enrolledCourse.currentUser;
    const { coverPhotoLink, name, description, status } = enrolledCourse.course;
    return (
        <div className="row shadow-sm my-3 py-2">
            <div className="col-md-2">{displayName}</div>
            <div className="col-md-3">{email}</div>
            <div className="col-md-2">{name}</div>
            <div className="col-md-3">{enrolledCourse.paymentId}</div>
            <div className="col-md-2">
                <select value={status} onChange={handleStatusChange}>
                    <option value="Ongoing">Ongoing</option>
                    <option value="Pending">Pending</option>
                    <option value="Finished">Finished</option>
                </select>
            </div>
        </div>
    );
    function handleStatusChange(e) {
        const confirmation = window.confirm(`Are you sure to change status to ${e.target.value}`);

        if (confirmation) {
            const newStatus = {
                enrollId: enrolledCourse._id,
                status: e.target.value,
            };
            fetch(`http://localhost:5000/changeEnrollStatus`, {
                method: "PUT",
                headers: {
                    "x-access-token": localStorage.getItem("ptToken"),
                    "content-type": "application/json",
                },
                body: JSON.stringify(newStatus),
            })
            .then(res => res.json())
            .then(data => {
                if(data){
                    window.location.reload();
                } else {
                    alert("Something went wrong, try again!");
                }
            })
        }
    }
};

export default AdminCourseCard;