import React from 'react';
import { Link } from 'react-router-dom';

const Offer = ({product}) => {

    // console.log(props);
    const {img, name, des} = product;
    return (
        <div>
            <div className="row">
             <div className="">
             <img className="img-fluid hover rounded" src={img} alt="" />
            <h3 className="py-3">  {des}</h3>
            <p className="text-muted">{name}</p>

            <Link to="">
                <button className="btn btn-outline-info px-5 m-auto" > Buy Now </button>
            </Link>
            </div>
        </div>
    </div>
    );
};

export default Offer;