import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
        <section className="contact my-5 py-5">
            <div className="container">
                <div className="section-header text-center text-white mb-5">
                    <h5>Contact</h5>
                    <h1>Any Query! Mail Us</h1>
                </div>
                <div className="col-md-9 mx-auto">
                    <form action="">
                        <div className="form-group my-1">
                            <input type="text" className="form-control" placeholder="Email Address *" />
                        </div>
                        <div className="form-group my-1">
                            <input type="text" className="form-control" placeholder="Subject *" />
                        </div>
                        <div className="form-group my-1">
                            <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                        </div>
                        <div className="form-group my-1 text-center">
                            <button type="button" className="btn btn-primary"> Submit </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;