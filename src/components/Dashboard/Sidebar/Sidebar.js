import { faBitbucket } from '@fortawesome/free-brands-svg-icons';
import { faHome, faPlus, faSignOutAlt, faStar, faUser, faUserEdit, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { userContext } from '../../../App';
import './Sidebar.css';
const Sidebar = () => {
    const [currentUser, setCurrentUser] = useContext(userContext);
    const history = useHistory();
    return (
        <div className="col-md-2 sidebar">
            <ul className="list-unstyled sidebar-items">
                <li>
                    <Link to="/" className="nav-link">
                        <FontAwesomeIcon icon={faHome} /> Home
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/enrolled-courses" className="nav-link">
                        <FontAwesomeIcon icon={faBitbucket} /> Enrolled Courses
                    </Link>
                </li>
                {currentUser.isAdmin ? (
                    <li>
                        <li>
                            <Link to="/dashboard/add-course" className="nav-link">
                                <FontAwesomeIcon icon={faPlus} /> Add Course
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/make-admin" className="nav-link">
                                <FontAwesomeIcon icon={faUserPlus} /> Make Admin
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/manage-courses" className="nav-link">
                                <FontAwesomeIcon icon={faUserEdit} /> Manage Courses
                            </Link>
                        </li>
                    </li>
                ) : (
                    <li>
                        <li>
                            <Link to="/dashboard/review" className="nav-link">
                                <FontAwesomeIcon icon={faStar} /> Review
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/dashboard/enroll/"
                                className="nav-link"
                            >
                                <FontAwesomeIcon icon={faPlus} /> Enroll
                            </Link>
                        </li>
                    </li>
                )}
                <li className="nav-link mt-5 text-brand">
                    <FontAwesomeIcon icon={faUser} />
                    {currentUser.displayName}
                </li>
                <li>
                    <button
                        className="btn nav-link text-brand"
                        onClick={() => {
                            localStorage.setItem("ptToken", "");
                            setCurrentUser("");
                            history.push("/");
                        }}
                    >
                        <FontAwesomeIcon icon={faSignOutAlt} />
                        Logout
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;