import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/appointment" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Book</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/bookingList" className="text-white">
                        <FontAwesomeIcon icon={faCalendar} /> <span>Booking List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/addReview" className="text-white">
                        <FontAwesomeIcon icon={faUsers} /> <span>Review</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/allCustomer" className="text-white">
                        <FontAwesomeIcon icon={faCalendar} /> <span>All Order</span>
                    </Link>
                </li>               
                <li>
                    <Link to="/dashboard/addService" className="text-white">
                        <FontAwesomeIcon icon={faFileAlt} /> <span>Add Service</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/manageService" className="text-white" >
                        <FontAwesomeIcon icon={faCog} /> <span>Manage Service</span>
                    </Link>
                </li>
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;