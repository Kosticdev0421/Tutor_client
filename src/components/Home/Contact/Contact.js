import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
        <div className="text-center m-5" id="contact">
            <h1 className="text-brand mb-5">Ask Us Anything!</h1>
            <form className="contact-form m-auto">
                <div className="row">
                    <div className="col-md-6">
                        <input type="text" name="firstName" placeholder="First Name" />
                    </div>
                    <div className="col-md-6">
                        <input type="text" name="lastName" placeholder="Last Name" />
                    </div>
                    <div className="col-md-6">
                        <input type="text" name="email" placeholder="Email" />
                    </div>
                    <div className="col-md-6">
                        <input type="text" name="phoneNumber" placeholder="Phone number" />
                    </div>
                    <textarea name="message" placeholder="Your message"></textarea>
                </div>
                <button className="btn btn-brand">Submit</button>
            </form>
        </div>
    );
};

export default Contact;