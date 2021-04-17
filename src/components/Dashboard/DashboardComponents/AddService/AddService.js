import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
// import './AddProducts.css'

const AddProducts = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        const productData = {
            name: data.name,
            description: data.description,
            imageURL: imageURL
        };

        const url = `http://localhost:5000/addService`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => alert('Service Uploaded'))
    };

    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '763892cb50d79b3e8919930228c785b3');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                console.log(response.data);
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="col-sm-8">
            <div className="text-center m-3">
                <form className="border p-4 form-style" onSubmit={handleSubmit(onSubmit)}>
                    <input className="m-1" name="name" placeholder="Service name" ref={register} />
                    <br />
                    <input className="m-1" name="description" placeholder="Description" ref={register({ required: true })} />
                    <br />
                    <input className="m-1" name="price" type="file" onChange={handleImageUpload} />
                    <br />
                    <input className="btn btn-primary" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddProducts;