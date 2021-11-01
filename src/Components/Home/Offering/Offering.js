import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Offer from '../Home/Offer/Offer';
import './Offering.css';

const Offering = () => {
    const [users, setUsers] = useState([])

    useEffect(()=>{
        fetch('item.json')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])
    return (
        <div className="container">
            
            <h1 className="text-center text-danger my-3">Select Your Best Food <br /> For Order 
                 </h1>
        <div className="offering row">

        {
        users.map(product => <Offer
            key={product.name}
            product={product}
            
        ></Offer>)
        }
    
        </div>  
        </div>
    );
};

export default Offering;