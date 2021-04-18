import React from 'react';
import headerImg from '../../../images/glenn-carstens-peters-RLw-UC03Gwc-unsplash.jpg';
const Header = () => {
    return (
        <div style={{ minHeight: "80vh" }}>
            <div className="row w-75 m-auto mt-5 d-flex justify-content-center align-items-center">
                <div className="col-md-6">
                    <h1>
                        WE BUILD <br /> <span className="highlighted-text">YOUR DREAM</span>
                    </h1>
                    <p>
                        The best tutors in this planet for you with just a few clicks. And some more
                        attractive words here!
                    </p>
                    <a href="#courses">
                        <button className="btn btn-brand">Enroll In A Course Now</button>
                    </a>
                </div>
                <div className="col-md-6">
                    <img src={headerImg} alt="" className="img-fluid" />
                </div>
            </div>
        </div>
    );
};

export default Header;