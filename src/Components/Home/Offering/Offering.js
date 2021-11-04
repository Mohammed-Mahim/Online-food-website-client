import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import './Offering.css';

const Offering = () => {
    const [services, setServices] = useState([])
  
    useEffect(()=>{
        fetch('https://protected-taiga-21434.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className="p-3 container">
        <h1 className="text-center">All Product </h1>
        <div className="services">
          <div className="row">
            {services?.map((pd) => (
              <div className="col-md-4 col-sm-12">
                <div className="service border border p-3">
                  <div className="services-img ">
                    <img className="w-100" src={pd?.img} alt="" />
                  </div>
                  <h6>{pd?.name}</h6>
                  <p>{pd?.des}</p>
                  <Link to={`/offering/${pd._id}`}>
                    <button className="btn btn-success">Buy Now</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    
        
    );
};

export default Offering;