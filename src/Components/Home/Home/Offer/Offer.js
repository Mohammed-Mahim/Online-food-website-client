import React from 'react';
import { Link } from 'react-router-dom';


const Offer = ({product}) => {
    // console.log(props);
    const {img, name, des} = product;
    return (
        <div>
            <div className="card" >
            <img width="100%" src={img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h3 className="card-title">{name}</h3>
                <p className="card-text">{des}</p>
                <Link to={`offering/${product._id}`}>
                <button className="btn btn-outline-danger px-5 m-auto" > Buy Now </button>
            </Link>
            </div>
            </div>

            
           
            </div>
        
    
    );
};

export default Offer;