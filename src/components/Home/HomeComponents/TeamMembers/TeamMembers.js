import React from 'react';
import crew1 from '../../../../images/crew1.jpg';
import crew2 from '../../../../images/crew2.jpg';
import TeamMember from '../TeamMember/TeamMember';

const TeamMembers = () => {
    const membersData = [
        {
            name: 'Frank Woods',
            designation: 'Team Lead',
            img: crew1
        },
        {
            name: 'John William',
            designation: 'Manager',
            img: crew2
        },
        {
            name: 'Michale John',
            designation: 'Accounts',
            img: crew1
        },
        {
            name: 'Thomas Arthur',
            designation: 'CEO',
            img: crew2
        }
    ]
    // console.log(membersData);
    return (
        <section style={{backgroundColor: "#fbe0c4"}} className="p-3">
            <div className="container">
                <h1 className="text-center mb-5">OUR TEAM</h1>
                <div className="row">
                    {
                        membersData.map(member => <TeamMember member={member}></TeamMember>)
                    }
                </div>
            </div>
        </section>
    );
};

export default TeamMembers;