import React, { useEffect, useState } from 'react';
import Services from '../../../Home/HomeComponents/Services/Services';
import Sidebar from '../Sidebar/Sidebar';

const ManageService = () => {
    const [services, setServices] = useState([]);
    const [info, setInfo] = useState({});
    const [toggle, setToggle] = useState(false);

    const api = "http://localhost:5000/services";
    useEffect(() => {
        fetch(api)
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/deleteServices/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                // console.log('delete successfully');
                alert('Product delete successfully ');
            })
    }

    // const handleToggle = () => {
    //     toggle ? setToggle(false) : setToggle(true);
    // }

    const updateChange = (e) => {
        const status = e.target.value;
        setInfo(status);
    }
    console.log(info);

    const handleUpdate = (id) => {
        fetch(`/update/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(result => {
                alert('Product Update successfully ');
            })
    }
    return (
        <div className="row">
            <div className="col-sm-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-sm-10">
                <div className="d-flex flex-column text-center bd-highlight mb-3 p-5">
                    <h2>Total Services: {services.length}</h2>
                    {
                        services.map(service =>
                            <div>
                                <div className="border m-2 p-2">
                                    <h2>{service.name}</h2>
                                    <p>{service.description}</p>
                                    <div>
                                        <button className="btn btn-primary" onClick={() => handleDelete(service._id)}>Delete</button>
                                    </div>
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageService;