import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import appointment from '../../../../images/appointment.jpg'

const AppointmentHeader = ({ handleDateChange }) => {
    return (
        <main style={{ height: '400px' }} className="row text-center">
            <h3 style={{ color: '#3A4256' }}>Appointment</h3>
            <div className="col-md-12 d-flex justify-content-center">
                <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                />
            </div>
        </main>

    );
};

export default AppointmentHeader;