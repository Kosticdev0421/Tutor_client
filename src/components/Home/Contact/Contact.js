import React from 'react';

const Contact = () => {
    return (
        <div className="text-center m-5">
            <h1 className="text-brand mb-5">Ask Us Anything!</h1>
            <form action="">
                <div className="row w-50 m-auto">
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