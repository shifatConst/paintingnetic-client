import React from 'react';

const TeamMember = (props) => {
    const { name, designation, img } = props.member;
    return (
        <div className="col-sm-3 text-center">
            <img style={{ height: '300px', width: '400px' }} className="img-fluid" src={img} alt="" />
            <div>
                <h3>{name}</h3>
                <p>{designation}</p>
            </div>
        </div>
    );
};

export default TeamMember;