import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookingCard = ({ booking, date }) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    // console.log(booking);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal(){
        setIsOpen(false);
      }
    return (
        <div className="col-md-4 mb-5">
            <div className="card p-3">
                <div className="card-body text-center">
                    <h5 className="card-title text-brand">{booking.subject}</h5>
                    <h6>{booking.visitingHour}</h6>
                    <h2>{booking.Price}</h2>
                    <p>{booking.totalSpace} SLOTS AVAILABLE</p>
                    <button onClick={openModal} className="btn btn-primary text-uppercase">Book Appointment</button>
                    <AppointmentForm modalIsOpen={modalIsOpen} appointmentOn={booking.subject} closeModal={closeModal} date={date}></AppointmentForm>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;