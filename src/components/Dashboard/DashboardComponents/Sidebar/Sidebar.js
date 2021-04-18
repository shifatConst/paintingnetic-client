import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers, faPlus, faCartPlus, faHome } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { UserContext } from '../../../../App';


const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser?.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/" className="text-white style">
                        <FontAwesomeIcon icon={faHome} /><span>Home</span>
                    </Link>
                </li>
                {!isAdmin && <div>
                    <li>
                        <Link to="/dashboard" className="text-white style">
                            <FontAwesomeIcon icon={faGripHorizontal} /><span>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/appointment" className="text-white style">
                            <FontAwesomeIcon icon={faCartPlus} /><span>Place Order</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/bookingList" className="text-white style">
                            <FontAwesomeIcon icon={faCalendar} /><span>Booking List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/addReview" className="text-white style">
                            <FontAwesomeIcon icon={faUsers} /><span>Review</span>
                        </Link>
                    </li>
                </div>}
                {isAdmin && <div>
                    <li>
                        <Link to="/dashboard/admin" className="text-white style" >
                            <FontAwesomeIcon icon={faUsers} /><span>Admin</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/allCustomer" className="text-white style">
                            <FontAwesomeIcon icon={faCalendar} /><span>All Order</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/addService" className="text-white style">
                            <FontAwesomeIcon icon={faPlus} /><span>Add Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/manageService" className="text-white style" >
                            <FontAwesomeIcon icon={faCog} /><span>Manage Service</span>
                        </Link>
                    </li>
                </div>}
            </ul>
            <div>
                <Link to="/login" className="text-white style"><FontAwesomeIcon icon={faSignOutAlt} /><span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;