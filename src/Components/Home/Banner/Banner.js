import React from 'react';

const Banner = () => {
    return (
    <div>
            <div className="container" >
            <div className="row py-5">
                <div className="col-md-6 px-5 py-5">
                   
                    <h1 className="text-bolder my-5"> FAST FOOD RESTAURANTS AND ONLINE FOOD ORDERING SERVICE WEBSITES</h1>
                 <div className="my-3">
                 <button className="btn btn-outline-danger me-4 w-50 "><small style={{fontSize:"20px"}} className="fw-bold ">Order food</small></button>
                    
                 </div>
                </div>
                <div className="col-md-6 p-3 ">
                    <img className="img-fluid rounded" src="https://lafka.althemist.com/wp-content/uploads/2021/06/vector-lafka-landing2.png" alt="" />
                </div>
            </div>
            
            <div className="row py-5">
            <div className="col-md-6 p-3 ">
                    <img className="img-fluid rounded" src="https://lafka.althemist.com/wp-content/uploads/2021/06/vector-lafka-landing1.png" alt="" />
                </div>
                <div className="col-md-6 px-5 py-5 py-5">
                   
                    <h1 className="text-bolder my-5 py-2"> BOOST YOUR SALES</h1>
                 <div className="my-3">
                     <p className="text-muted"> Lafka is based on a deep industry research and it’s core features are consulted with real-life local fast food business owners to provide the best tools for online food ordering websites like Burger Shops, Pizzeria, Bakery, Street Food, Sushi etc.</p>
                 
                    
                 </div>
                </div>
               
            </div>

        </div>
    </div>
    );
};

export default Banner;