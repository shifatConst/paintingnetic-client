import React from 'react';
import BookingCard from '../BookingCard/BookingCard';

const bookingData = [
    {
        _id: '5e8df50be6e8231764dc23de',
        id: 1,
        subject: 'Residential Interior',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 5
    },
    {
        _id: '5e8df578e6e8231764dc23df',
        id: 2,
        subject: 'Residential Exterior',
        visitingHour: '10:50 AM - 11:30 AM',
        totalSpace: 5
    },
    {
        _id: '5e8df5aee6e8231764dc23e0',
        id: 3,
        subject: 'Commercial Painting',
        visitingHour: '5:00 PM - 6:00 PM',
        totalSpace: 5
    },
    {
        _id: '5e8df63be6e8231764dc23e1',
        id: 4,
        subject: 'WallPaper Removal',
        visitingHour: '7:00 AM - 8:30 AM',
        totalSpace: 5
    },
    {
        _id: '5e8df68de6e8231764dc23e2',
        id: 5,
        subject: 'Water Damage Repair',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 5
    },
    {
        _id: '5e8df6a0e6e8231764dc23e3',
        id: 6,
        subject: 'Drywall Installation',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 5
    }
]

const BookAppointment = ({ date }) => {

    return (
        <section>
            <h2 className="text-center text-brand m-5">We are available for {date.toDateString()}</h2>
            <div className="row">
                {
                    bookingData.map(booking => <BookingCard booking={booking} date={date} key={booking.id}></BookingCard>)
                }
            </div>
        </section>
    );
};

export default BookAppointment;