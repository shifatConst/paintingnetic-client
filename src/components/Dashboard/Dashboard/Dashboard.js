import React, { useContext, useEffect, useState } from 'react';
import AppointmentsByDate from '../DashboardComponents/AppointmentByDate/AppointmentByDate'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Sidebar from '../DashboardComponents/Sidebar/Sidebar';
import { UserContext } from '../../../App';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "100%"
}

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);

    const handleDateChange = date => {
        setSelectedDate(date);
    }

    useEffect(() => {
        fetch('http://localhost:5000/appointmentsByDate', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ date: selectedDate, email: loggedInUser?.email })
        })
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [selectedDate])
    return (
        <div className="row">
            <div className="col-sm-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-sm-10 mt-5">
                <div className="row">
                    <div className="col-sm-6 d-flex justify-content-center">
                        <Calendar
                            onChange={handleDateChange}
                            value={new Date()}
                        />
                    </div>
                    <div className="col-sm-6">
                        <AppointmentsByDate appointments={appointments}></AppointmentsByDate>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;