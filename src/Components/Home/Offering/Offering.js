import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Offer from '../Home/Offer/Offer';


import './Offering.css'

const Offering = () => {
    const [users, setUsers] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])
    return (
        <div>
            <h4>this is offering page</h4>
            <h3>users length {users.length}</h3>
        <div className="offering">

        {
            users.map(product => <Offer
            key={product.name}
            product={product}
            
            ></Offer>)
        }
    <h4>hello</h4>
        </div>
          
           
        </div>
    );
};

export default Offering;