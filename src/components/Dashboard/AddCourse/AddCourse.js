import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useContext, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import { userContext } from '../../../App';

const AddCourse = () => {
    const [coverPhotoLink, setCoverPhotoLink] = useState("");
    const courseNameRef = useRef();
    const coursePriceRef = useRef();
    const courseDescriptionRef = useRef();
    const [currentUser, setCurrentUser] = useContext(userContext);
    const history = useHistory();
    const [imageLoaded, setImageLoaded] = useState("");

    return (
        <div>
            <h2>Add Course</h2>
            <form onSubmit={handleAddCourse}>
                <div>
                    <small>Course Name</small>
                    <input type="text" placeholder="Enter Name" required ref={courseNameRef} />
                </div>
                <div>
                    <small>Course Price</small>
                    <input type="number" placeholder="Enter Price" required ref={coursePriceRef} />
                </div>
                <div>
                    <small>Description</small>
                    <textarea
                        cols="30"
                        rows="10"
                        placeholder="Enter Description"
                        required
                        ref={courseDescriptionRef}
                    ></textarea>
                </div>
                <div>
                    <small>Add Course Cover Photo</small>
                    <input type="file" required onChange={getPhotoLink} />
                    {
                        imageLoaded && <p>{imageLoaded}</p>
                    }
                </div>
                <button className="btn btn-brand" disabled={coverPhotoLink ? false : true} >
                    <FontAwesomeIcon icon={faPlus} size="lg" />
                </button>
            </form>
        </div>
    );

    function handleAddCourse(e){
        e.preventDefault();
        if (coverPhotoLink) {
            const newCourse = {
                email: currentUser.email,
                name: courseNameRef.current.value,
                price: coursePriceRef.current.value,
                description: courseDescriptionRef.current.value,
                coverPhotoLink,
            };
            console.log(newCourse);
            fetch(`https://pro-tutors.herokuapp.com/addCourse`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    "x-access-token": localStorage.getItem('ptToken')
                },
                body: JSON.stringify(newCourse),
            })
            .then(res => res.json())
            .then((data) => {
                if (data) {
                    console.log(data);
                    history.push("/");
                } else {
                    alert("Something went wrong, please try again!");
                }
            });
        } else {
            alert("Photo was not uploaded! Please wait");
        }
    }

    function getPhotoLink(e) {
        const imageData = new FormData();

        imageData.set("key", "944474bba0b71f9545ba1025a047dc94");
        imageData.append("image", e.target.files[0]);
        axios
        .post("https://api.imgbb.com/1/upload", imageData)
        .then((response) => {
                setCoverPhotoLink(response.data.data.display_url);
            })
            .catch((err) => {
                console.log(err);
            });
    }
};

export default AddCourse;