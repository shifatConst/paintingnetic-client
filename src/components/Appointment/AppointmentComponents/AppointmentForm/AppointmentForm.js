import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import ProcessPayment from '../../../ProcessPayment/ProcessPayment';
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root');

const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn, date }) => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        data.service = appointmentOn;
        data.date = date;
        data.status = 'Pending';
        data.created = new Date();

        fetch('http://localhost:5000/addAppointment', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    closeModal();
                    alert('Appointment created successfully.');
                }
            })
    };
    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <h2 className="text-center text-brand">{appointmentOn}</h2>
                <p className="text-secondary text-center"><small>ON {date.toDateString()}</small></p>
                <form className="p-4 m-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group m-1">
                        <input type="text" ref={register({ required: true })} name="name" placeholder="Your Name" className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}

                    </div>
                    <div className="form-group m-2">
                        <input type="text" ref={register({ required: true })} name="phone" placeholder="Phone Number" className="form-control" />
                        {errors.phone && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group m-2">
                        <input type="text" ref={register({ required: true })} name="email" placeholder="Email" className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group m-2">
                        <input type="text" ref={register({ required: true })} name="address" placeholder="Address" className="form-control" />
                        {errors.address && <span className="text-danger">This field is required</span>}
                    </div>               
                    <div className="form-group text-right">
                        <button type="submit" className="btn btn-primary">Send</button>
                    </div>
                    <div>
                        <ProcessPayment></ProcessPayment>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default AppointmentForm;