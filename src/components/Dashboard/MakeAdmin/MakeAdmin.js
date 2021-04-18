import React, { useContext, useRef } from 'react';
import { userContext } from '../../../App';
const MakeAdmin = () => {
    const emailRef = useRef();
    const [currentUser, setCurrentUser] = useContext(userContext);

    return (
        <div className="m-5">
            <form onSubmit={handleMakeAdmin}>
                <small>Email</small>
                <input type="email" placeholder="Enter Email" required ref={emailRef} />
                <button className="btn btn-brand">Submit</button>
            </form>
        </div>
    );
    function handleMakeAdmin(e){
        e.preventDefault();
        const email = emailRef.current.value;
        const newAdmin = {
            email,
            addedBy: currentUser.email,
        }
        console.log(newAdmin);
        fetch(`https://pro-tutors.herokuapp.com/makeAdmin`, {
            method: "POST",
            headers: {
                "content-type": 'application/json',
                "x-access-token": localStorage.getItem('ptToken'),
            },
            body: JSON.stringify(newAdmin)
        })
        .then(res => res.json())
        .then(data => {
            alert(data.message);            
        })
    }
};

export default MakeAdmin;