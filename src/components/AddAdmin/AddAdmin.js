import React, { useEffect, useState } from 'react';
import Sidebar from '../Dashboard/DashboardComponents/Sidebar/Sidebar';

const AddAdmin = () => {
    const [info, setInfo] = useState({});
    const [allAdmins, setAllAdmins] = useState([])
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    const handleSubmit = () => {
        const url = `http://localhost:5000/addAdmin`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => alert('Service Uploaded'))
    }

    const api = "http://localhost:5000/allAdmin";
    useEffect(() => {
        fetch(api)
            .then(res => res.json())
            .then(data => setAllAdmins(data));
    }, [])
    return (
        <div className="row">
            <div className="col-sm-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-sm-10">
                <div className="m-5">
                    <h5 className="text-center">Add An Admin</h5>
                    <form className="m-5" onSubmit={handleSubmit}>
                        <div className="form-group mx-5">
                            <label htmlFor="exampleInputPassword1">Name</label>
                            <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Name" />
                        </div>
                        <div className="form-group mx-5">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Enter email" />
                        </div>
                        <div className="mx-5">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="d-flex flex-column text-center bd-highlight mb-3 p-5">
                    <h3>Existing Admins: {allAdmins.length}</h3>
                    {
                        allAdmins.map(admin => <div className="p-4 bd-highlight mx-5 my-2 border order-style">Name: <b>{admin.name}</b>, Email: <b>{admin.email}</b></div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AddAdmin;