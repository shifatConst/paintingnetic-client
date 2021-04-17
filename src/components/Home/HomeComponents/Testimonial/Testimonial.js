import React from 'react';

const Testimonial = (props) => {

    const { quote, name, from, imageURL } = props.testimonial;
    return (
        <div className="col-sm-4 card shadow-sm">
            <div className="card-body">
                <p className="card-text text-center">{quote}</p>
            </div>
            <div className="card-footer d-flex  align-items-center">
                <img style={{height: '100px', width: '120px'}} className="mx-3" src={imageURL} alt="" width="60" />
                <div>
                    <h6 className="text-primary">{name}</h6>
                    <p className="m-0">{from}</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;