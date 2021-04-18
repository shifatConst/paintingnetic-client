import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../App';
import Sidebar from '../Sidebar/Sidebar';

const UserOrder = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://powerful-waters-62812.herokuapp.com/order?email=' + loggedInUser?.email)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])
    return (
        <div className="row">
            <div className="col-sm-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-sm-10">
                <h5>You have {orders.length} orders</h5>
                <div className="d-flex flex-column bd-highlight mb-3">
                    {
                        orders.map(order => <div className="p-4 bd-highlight mx-5 my-2 border order-style">
                            Name: <b>{order.name}</b>,
                        Order date: <b>{order.date}</b>,
                        Service: <b>{order.service}</b>,
                        Status: <b>{order.status}</b>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default UserOrder;