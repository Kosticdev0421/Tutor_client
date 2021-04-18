import { faBook, faPen, faUser, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import './Features.css';
const Features = () => {
    const featuresData = [
        {
            icon: faPen,
            title: "Weekend Exam",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, hic.",
        },
        {
            icon: faUser,
            title: "Individual Attention",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, nam.",
        },
        {
            icon: faUsers,
            title: "Brilliant Tutors",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, hic!",
        },
        {
            icon: faBook,
            title: "Focus on Basics",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, hic!",
        },
        
    ]
    return (
        <div>
        <h1 className="text-center text-brand mb-5">Why we are special</h1>
            <div className="row">
                {
                    featuresData.map(feature => {
                        return (
                            <div className="col-md-3 feature">
                                <div className="feature-icon">
                                    <FontAwesomeIcon icon={feature.icon} />
                                </div>
                                <h2 className="highlighted-text">{feature.title}</h2>
                                <p>{feature.description}</p>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default Features;