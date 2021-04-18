import React, { useEffect, useState } from 'react';
// import AppointmentDataTable from '../../Dashboard/DashboardComponents/AppointmentDataTable/AppointmentDataTable';
import Sidebar from '../../Dashboard/DashboardComponents/Sidebar/Sidebar';

const AllCustomers = () => {
    const [info, setInfo] = useState({});
    const [appointments, setAppointments] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/appointments')
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [])

    const updateChange = (e) => {
        const status = e.target.value;
        setInfo(status);
    }
    console.log(info);

    const handleUpdate = (id) => {
        fetch(`http://localhost:5000/update/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(result => {
                alert('Product Update successfully ');
            })
    }

    return (
        <div className="row">
            <div className="col-sm-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-sm-8">
                <div className="d-flex flex-column text-center bd-highlight mb-3 p-5">
                    <h2>Total Order: {appointments.length}</h2>
                    {
                        appointments.map(app =>
                            <div>
                                <div className="border m-2 p-2">
                                    <p>Name: <b>{app.name}</b></p>
                                    <p>Email: <b>{app.email}</b></p>
                                    <p>Service: <b>{app.service}</b></p>
                                    <p>Date: <b>{app.date}</b></p>
                                    <div>
                                        <select onChange={updateChange} name="cars" id="cars">
                                            <option value="Pending">Pending</option>
                                            <option value="On going">On going</option>
                                            <option value="Done">Done</option>
                                        </select>
                                        <button className="btn btn-primary" onClick={() => handleUpdate(app._id)}>Update</button>
                                    </div>

                                </div>
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllCustomers;