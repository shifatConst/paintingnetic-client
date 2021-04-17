import React from 'react';
import { Link } from 'react-router-dom';
import paintingHeader from '../../../../images/paintingHeader.jpg'

const HeaderMain = () => {
    return (
        <main style={{height:'500px'}} className="row d-flex align-items-center w-100">
            <div className="col-sm-6 text-center">
                <h1>BRING YOUR HOME <br /> TO LOVELY COLORS</h1>
                <p className="px-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit deserunt pariatur incidunt deleniti consectetur dicta!</p>
                <Link to="/dashboard/appointment" className="btn btn-primary">Color Now</Link>
            </div>
            <div className="col-sm-6 text-center">
                <img className="img-fluid" src={paintingHeader} alt=""/>
            </div>
        </main>
    );
};

export default HeaderMain;