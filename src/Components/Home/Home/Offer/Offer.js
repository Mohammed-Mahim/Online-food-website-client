import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../../hooks/useAuth';

import "./Offer.css";

const Offer = () => {
    const {serviceId} = useParams();
    const [services, setService] = useState({});
    const{user} = useAuth();

    useEffect(()=>{
        fetch(`http://localhost:5000/products/${serviceId}`)
        .then(res=> res.json())
        .then(data => setService(data))

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    console.log(services);
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const onSubmit = data => {
       
        data.packageName = services.name;
        
      
        data.status = "pending";
        fetch('http://localhost:5000/orders',{
            method:"POST",
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result => {
            if(result.insertedId){
                alert('Package Added');
                reset(); 
            }
        })
    }
    return (
        <div className="row book__container">
            <div className="col-md-8 col-sm-12 package__details">
                <h1>{services?.name}</h1>
                <div className="service__img">
                    <img className="img-fluid" src={services?.img} alt="" />
                </div>
                <p>{services?.des}</p>
            </div>
            <div className="col-md-4 col-sm-12 form__container">
                <h4>Submit this form to Order FOOD</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
            
            <input defaultValue={user?.displayName} placeholder="Your Name" {...register("name")} /> <br />
            <input placeholder="Your Email" {...register("email")} /> <br />
            <label htmlFor="from">From</label> <br />
            <input type="date" {...register("from")} /> <br />
            <label htmlFor="to">To</label> <br />
            <input type="date" {...register("to")} /> <br />
            <input placeholder="Your Mobile No" {...register("mobile", { required: true })} /> <br />
            {errors.exampleRequired && <span>This field is required</span>}
            
            <div className="text-center">
                <input type="submit" />
            </div>
            </form>
            </div>
        </div>
    );
};

export default Offer;