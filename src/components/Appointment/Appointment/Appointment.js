import React, { useState } from 'react';
import Sidebar from '../../Dashboard/DashboardComponents/Sidebar/Sidebar';
import AppointmentHeader from '../AppointmentComponents/AppointmentHeader/AppointmentHeader';
import BookAppointment from '../AppointmentComponents/BookAppointment/BookAppointment';


const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = date => {
        setSelectedDate(date);
    }
    return (
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 mt-5">
                    <AppointmentHeader handleDateChange={handleDateChange}></AppointmentHeader>
                    <BookAppointment date={selectedDate}></BookAppointment>
                </div>
            </div>
    );
};

export default Appointment;